import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { FormsModule } from '@angular/forms';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ProdutoComponent } from './produto/produto.component';
import { PessoaManterComponent } from './pessoa/pessoa-manter/pessoa-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CabecalhoComponent,
    BarraLateralComponent,
    PessoaComponent,
    ProdutoComponent,
    PessoaManterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule]
})
export class AppModule { }
