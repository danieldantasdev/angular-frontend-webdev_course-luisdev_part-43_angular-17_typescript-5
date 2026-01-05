// @ts-nocheck

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { msg } from 'src/app/shared/utils/msg';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  msg = msg;
  registerForm: FormGroup = this.fb.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {}

  checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
      if (radioButton.checked === false) {
        counter++;
      }
    }
    
    return counter !== list.length;
  }

  toogleRole(role: 'dev' | 'cliente'){
    this.registerForm.get('role')?.setValue(role);
  }

  cadastrar() {

    // Você solicita um serviço para o garçom trazer a comida (sobrescrever)
    // ....
    // .... 30min 1h 2h
    // ....
    // GARÇOM: Ta aqui sua comida!
    // Executa comer();


    if(this.registerForm.valid){
      let payload = this.registerForm.value;

      this.http.post(environment.apiUrl + 'users', payload)
        .subscribe(
          (response) => {
            Swal.fire({
              title: 'Bom Trabalho!',
              text: "Cadastrado com sucesso!",
              icon: 'success',
              confirmButtonText: 'Ok!'
            }).then((result) => {
                if (result.isConfirmed) {
                  localStorage.setItem("userName", response.fullName);
                  localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
                  localStorage.setItem("idClient", response.id);
                }
            })
          }
        );
    } else {
      this.registerForm.markAllAsTouched();
    }  
  }

  isInvalid(inputName: string, validatorName: string){
    const formControl: any = this.registerForm.get(inputName);
    if(formControl.errors !== null){
      return formControl.errors[validatorName] && formControl.touched;
    }
  }

}
