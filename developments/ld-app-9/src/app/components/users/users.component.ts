import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  nomeUser: string = 'luis felipe';

  alteraNomeUser(nome: string) {
    this.nomeUser = nome;
  }

}
