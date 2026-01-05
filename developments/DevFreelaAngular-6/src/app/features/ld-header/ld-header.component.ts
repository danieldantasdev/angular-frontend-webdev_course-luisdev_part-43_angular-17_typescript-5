import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ld-header',
  templateUrl: './ld-header.component.html',
  styleUrls: ['./ld-header.component.scss']
})
export class LdHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.buildHeader();
  }

  buildHeader() {
    if(this.checkIfUserIsLogged()){
      // insere nome de usuario no header e role tambem
    } else {
      // ...
    }
  }

  checkIfUserIsLogged() {
    return localStorage.getItem("userName") && localStorage.getItem("role");
  }

}
