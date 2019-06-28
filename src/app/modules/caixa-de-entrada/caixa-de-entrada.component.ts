import { NgModule, Component, Input } from "@angular/core";
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { PageDataService } from 'src/app/services/page-data.service';
import { HeaderDataService } from 'src/app/services/header-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  `]
})

export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  emailList = [];

  termoParaFiltro = '';

  constructor(private emailService: EmailService,
    private router: Router,
    private toast: ToastrService,
    private pageDataService: PageDataService,
    private headerDataService: HeaderDataService) { }

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe(
        (lista) => this.emailList = lista,
        (erro: HttpErrorResponse) => this.toast.error('Erro no Servidor de Email: ' + erro.message)
      );

    this.pageDataService.defineTitulo('Caixa de Entrada - CMail');

    this.headerDataService
      .valorDofiltro
      .subscribe(novoValor => this.termoParaFiltro = novoValor);
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) return;

    this.emailService
      .enviar(this.email)
      .subscribe(
        (emailApi) => {
          this.toast.success('Email enviado.');
          this.emailList.push(emailApi);
          this.toggleNewEmailForm();
          this.email = { destinatario: '', assunto: '', conteudo: '' };
          formEmail.reset();
        },
        (erro) => this.toast.error('Email não enviado...')
      )

    // this.emailList.push(this.email);

    // this.toggleNewEmailForm();

    // this.email = {
    //   destinatario: '',
    //   assunto: '',
    //   conteudo: ''
    // }

    // formEmail.reset();

  }

  handleRemoveEmail(vaiRemover, emailId) {
    if (vaiRemover.status === 'removing') {
      this.emailService
        .deletar(emailId)
        .subscribe(
          (response) => {
            this.toast.success('Email excluído com sucesso.')
            this.emailList = this.emailList.filter(email => email.id != emailId);
          },
          (erro: HttpErrorResponse) => this.toast.error('Erro: ' + erro.message)
        )
    }
  }

  filtrarEmailsPorAssunto() {
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();

    return this.emailList.filter(email => {
      const assunto = email.assunto.toLowerCase();
      return assunto.includes(termoParaFiltroEmMinusculo);
    });
  }

  edicaoEmail(emailId) {
    this.router.navigate([`/edicao/${emailId}`]);
  }
}