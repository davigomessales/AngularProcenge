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
  listaEstados: string[] = ["PE", "PB", "PA"];
  // listaMunicipios: any[] = [
  //   {
  //     "codigo": "01",
  //     "cidade": "Recife"
  //   },
  //   {
  //     "codigo": "02",
  //     "cidade": "Olinda"
  //   },
  //   {
  //     "codigo": "03",
  //     "cidade": "Jaboatão"
  //   }
  // ]
  listaMunicipios: any[] = [];

  listaPessoas: Pessoa[] = [
    {
      "codigo": "01",
      "nome": "Davi",
      "telefone": "1234",
      "dataNascimento": new Date(),
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
      "dataNascimento": new Date(),
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
      "dataNascimento": new Date(),
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
  }

  removerPessoa(pessoa) {
    this.listaPessoas = this.listaPessoas.filter(
      obj => obj !== pessoa
    );
  }
  inverterMostrar() {
    this.mostrar = !this.mostrar;
  }

  carregarCidade(){
    switch(this.pessoa.estado){
      case 'PE':{
        this.listaMunicipios = [
          {
            "codigo": "01",
            "cidade": "Recife"
          }
        ]
        break;
      }
      case 'PB':{
        this.listaMunicipios = [
          {
            "codigo": "02",
            "cidade": "Joao Pessoa"
          }
        ]
        break;
      }
    }
  }
}
