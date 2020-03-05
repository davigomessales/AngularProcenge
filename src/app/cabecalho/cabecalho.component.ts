import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  tituloCabecalho: String = "Titulo do Cabecalho."
  constructor() { }

  ngOnInit(): void {
  }
}
