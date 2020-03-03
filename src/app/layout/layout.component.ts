import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  titulo: string = 'Cadastro Pessoa';
  textoCodigo: string = '';
  textoNome: string = '';
  textoTelefone: string = '';
  textoDataNascimento: string = '';
  textoEndereco: string = '';
  textoBairro: string = '';
  textoCidade: string = '';
  textoEstado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(){
    alert(this.titulo+ "\n" 
    +this.textoCodigo + "\n"
    +this.textoNome + "\n"
    +this.textoTelefone + "\n"
    +this.textoDataNascimento + "\n"
    +this.textoEndereco + "\n"
    +this.textoBairro + "\n"
    +this.textoCidade + "\n"
    +this.textoEstado + "\n");
  }

}
