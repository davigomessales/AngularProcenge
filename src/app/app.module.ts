import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { FormsModule } from '@angular/forms';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CabecalhoComponent,
    BarraLateralComponent,
    PessoaComponent
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
