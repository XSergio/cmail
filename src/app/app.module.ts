import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';

import { RoutingModule } from './app-routing.module';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { SharedComponentsModule } from './components/shared-components.module';
import { LoginModule } from './modules/login/login.module';
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';
import { EdicaoComponent } from './modules/edicao/edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    FiltroPorAssunto,
    EdicaoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule,
    ToastrModule.forRoot(),
    SharedComponentsModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
