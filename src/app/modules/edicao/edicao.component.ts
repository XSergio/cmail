import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageDataService } from 'src/app/services/page-data.service';
import { EmailService } from 'src/app/services/email.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cmail-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  email = {
    id: '',
    destinatario: '',
    assunto: '',
    conteudo: '',
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private pageDataService: PageDataService,
    private emailService: EmailService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.emailService
      .emailPorId(id)
      .subscribe(email => {
        const { id, destinatario, assunto, conteudo } = email[0];
        this.email.id = id;
        this.email.destinatario = destinatario;
        this.email.assunto = assunto;
        this.email.conteudo = conteudo;
        this.pageDataService.defineTitulo(assunto);
      });

  }

  handleEdicaoForm(formEdicao: NgForm) {
    console.log(formEdicao.value);
  }

  removeEmail(emailId) {
    if (confirm('Tem certeza?')) {
      this.emailService
        .deletar(emailId)
        .subscribe(
          (response) => {
            this.toast.success('Email excluído com sucesso.')
            this.router.navigate(['/inbox']);
          },
          (erro: HttpErrorResponse) => this.toast.error('Erro: ' + erro.message)
        )
    }
  }

  voltar() {
    this.router.navigate(['/inbox']);
  }
}
