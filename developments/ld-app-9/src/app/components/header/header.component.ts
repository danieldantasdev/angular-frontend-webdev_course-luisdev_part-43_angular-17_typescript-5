import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() nomeEnviado!: string;
  @Output() alterarNomeDoPai: EventEmitter<string> = new EventEmitter;

  nome: string = 'joão';
  cidade: string = '';
  desabilitaCidadeInput: boolean = false;
  typeInput = 'text';
  
  ngOnInit(): void {
    // executa aqui quando a tela estiver carregada

    this.nome = this.nomeEnviado;
  }

  alteraNome() {
    this.nome = 'pedro';
    this.alterarNomeDoPai.emit(this.nome);
  }

  resetCidade() {
    this.cidade = '';
  }

  desabilitaCidade() {
    this.desabilitaCidadeInput = true;
  }

}
