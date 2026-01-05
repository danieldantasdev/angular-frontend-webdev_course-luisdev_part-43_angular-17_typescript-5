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
  title: string = '';
  actionButtonText: string = '';

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
      this.title = "Vamos cadastrar seu novo projeto!";
      this.actionButtonText = "Cadastrar";
    }

    // MODO EDITAR
    if (this.screenType == 'edit') {
      this.title = "Editar projeto";
      this.actionButtonText = "Salvar";
    }
  }
  }
