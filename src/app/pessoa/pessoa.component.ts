import { Component, OnInit } from '@angular/core';
import { Pessoa } from './../pessoa/Pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  titulo = 'Cadastro Pessoa';
  pessoa: Pessoa = new Pessoa();
  listaPessoas: Pessoa[] = [
    {
      "codigo": "01",
      "nome": "Davi",
      "telefone": "1234",
      "dataNascimento": "15-05-1990",
      "endereco": " Rua Jose Paraiso",
      "bairro": "Boa Viagem",
      "cidade": "Recife",
      "estado": "Pernambuco",
      "isAtivo": false
    },

    {
      "codigo": "02",
      "nome": " Cristiane",
      "telefone": " 0987",
      "dataNascimento": " 07-08-1980",
      "endereco": " Rua Lagoa do Ouro",
      "bairro": " Boa Viagem",
      "cidade": " Recife",
      "estado": " Pernambuco",
      "isAtivo": false
    },

    {
      "codigo": "03",
      "nome": "Marluce",
      "telefone": "6543",
      "dataNascimento": "13-05-1954",
      "endereco": "Rua do Futuro",
      "bairro": "Cajueiro Seco",
      "cidade": "Jaboatão",
      "estado": "Pernambuco",
      "isAtivo": true
    }
  ];

  mostrar = false;
  constructor() { }

  ngOnInit(): void {
  }

  incluirPessoa() {
    this.listaPessoas.push(this.pessoa);
    this.pessoa = new Pessoa();
    console.log(this.pessoa.isAtivo);
  }

  editarPessoa() {
    console.log(this.listaPessoas.keys());
  }
  inverterMostrar() {
    this.mostrar = !this.mostrar;
  }
}
