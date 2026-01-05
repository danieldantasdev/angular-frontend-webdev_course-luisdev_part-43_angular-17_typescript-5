import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  nome: string = 'joão';
  cidade: string = '';
  desabilitaCidadeInput: boolean = false;
  typeInput = 'text';
  
  ngOnInit(): void {
    // executa aqui quando a tela estiver carregada
  }

  alteraNome() {
    this.nome = 'pedro';
  }

  resetCidade() {
    this.cidade = '';
  }

  desabilitaCidade() {
    this.desabilitaCidadeInput = true;
  }

}
