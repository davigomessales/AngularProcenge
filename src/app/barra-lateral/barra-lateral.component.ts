import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  tituloBarra: string = "Meu lindo titulo de barra!"
  

  constructor() { }

  ngOnInit(): void {
  }

}
