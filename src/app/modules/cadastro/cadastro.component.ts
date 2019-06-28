import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { map, catchError, debounceTime } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', Validators.required, this.validaImagem.bind(this)),
  })

  mensagensErro = [];

  constructor(private httpClient: HttpClient, 
    private roteador: Router, 
    private toast: ToastrService,
    private pageDataService: PageDataService) { }

  ngOnInit() {
    this.pageDataService.defineTitulo('Cadastro de Usuário - CMail');
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {

      const userData = new User(this.formCadastro.value);

      this.httpClient
        .post('http://localhost:3200/users', userData)
        .subscribe(
          () => {
            this.toast.success('Cadastrado com sucesso!')
            console.log('Cadastrado com sucesso.');
            this.formCadastro.reset();
            setTimeout(() => this.roteador.navigate(['']), 3000);
          },
          (responseError: HttpErrorResponse) => {
            // Retirado para utilizar o ToastService
            // this.mensagensErro.push(responseError);
            this.toast.error('Erro: ' + responseError.message);
          }
        )
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  validarTodosOsCamposDoFormulario(form: FormGroup) {
    //angular 8
    this.formCadastro.markAllAsTouched(); //marca todos como tocados e se estiverem inválidos caem no tratamento de erro do template cmail-form-group 

    //angular 7
    // Object.keys(form.controls).forEach(field => {
    //   const control = form.get(field);
    //   control.markAsTouched({ onlySelf: true });
    // })
  }

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true };
        }),
        catchError((error) => {
          return [{ urlInvalida: true }];
        })
      )
  }

  mostraSnack () {

  }

}
