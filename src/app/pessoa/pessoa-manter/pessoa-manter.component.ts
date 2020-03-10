import { Pessoa } from './../Pessoa';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-manter',
  templateUrl: './pessoa-manter.component.html',
  styleUrls: ['./pessoa-manter.component.css']
})
export class PessoaManterComponent implements OnInit {

  titulo = 'Cadastro Pessoa';
  @Output('pessoaEnviar') pessoaEmitir: EventEmitter<Pessoa> = new EventEmitter()
  @Input() pessoa: Pessoa = new Pessoa();
  listaEstados: string[] = ["PE", "PB", "PA"];
  mostrar: boolean = false;
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
  listaMunicipios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  incluirPessoa() {
    this.pessoaEmitir.emit(this.pessoa);
    this.pessoa = new Pessoa();
    console.log(this.listaPessoas);
  }

  inverterMostrar() {
    this.mostrar = !this.mostrar;
  }

  carregarCidade() {
    switch (this.pessoa.estado) {
      case 'PE': {
        this.listaMunicipios = [
          {
            "codigo": "01",
            "nomeCidade": "Recife"
          }
        ]
        break;
      }
      case 'PB': {
        this.listaMunicipios = [
          {
            "codigo": "02",
            "nomeCidade": "Joao Pessoa"
          }
        ]
        break;
      }
      case 'PA': {
        this.listaMunicipios = [
          {
            "codigo": "03",
            "nomeCidade": "Belém"
          }
        ]
        break;
      }
    }
  }

}
