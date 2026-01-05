import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { ProjectCreateEditService } from './services/project-create-edit.service';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss']
})
export class ProjectCreateEditComponent implements OnInit {
  id: string;
  screenType: 'create' | 'edit';

  constructor(private router: Router, private projectCreateEditService: ProjectCreateEditService) {
    this.id = history.state.id;
    this.screenType = this.id ? 'edit' : 'create';
  }

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    // Inicia a massa de dados (payload)
    let payload: IProject = {
      title: (document.querySelector("#title") as any).value,
      totalCost: (document.querySelector("#totalCost") as any).value,
      description: (document.querySelector("#description") as any).value,
      idClient: localStorage.getItem("idClient")
    }

    if(this.screenType === 'create'){
      this.projectCreateEditService.postProject(payload)
        .subscribe(response => {
          alert('Cadastrado com sucesso!');
          this.router.navigateByUrl('list');
        })
    }

    if(this.screenType === 'edit'){
      this.projectCreateEditService.putProject(payload, this.id)
      .subscribe(response => {
        alert('Editado com sucesso!');
        this.router.navigateByUrl('list');
      })
    }
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${this.id}`)
        .then(response => response.json())
        .then(project => {
          (document.querySelector("#title") as any).value = project.title;
          (document.querySelector("#totalCost") as any).value = project.totalCost;
          (document.querySelector("#description") as any).value = project.description;
        })
    }
  }


  setScreenTypeTexts() {
    // MODO CRIAR
    if (this.screenType == 'create') {
      (document.querySelector('#main-title') as any).innerText = "Vamos cadastrar seu novo projeto!";
      (document.querySelector('#action-button') as any).innerText = "Cadastrar";
    }

    // MODO EDITAR
    if (this.screenType == 'edit') {
      (document.querySelector('#main-title') as any).innerText = "Editar projeto";
      (document.querySelector('#action-button') as any).innerText = "Salvar";
    }
  }
  }
