import { Component, OnInit } from '@angular/core';
import { Produto } from './Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[] = [];
  unidadeMedidas: string[] = ['Un', 'Kg', 'l', 'm'];
  constructor() { }

  ngOnInit(): void {
  }

  incluirProduto(){
    this.listaProdutos.push(this.produto);
    this.produto = new Produto();
    console.log(this.listaProdutos);
  }
  removerProduto(produto){
    this.listaProdutos = this.listaProdutos.filter(
      obj => obj !== produto
    )
  }

}
