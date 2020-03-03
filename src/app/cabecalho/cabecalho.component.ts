import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  titulo: string = 'Meu lindo cabeçalho!';
  texto: string = 'Algum texto';

  constructor() { }

  ngOnInit(): void {
  }
  ola(){
    alert("opa " +this.texto);
  }
}
