import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: '',
  }

  constructor(private loginService: LoginService,
    private toast: ToastrService,
    private router: Router,
    private pageDataService: PageDataService) { }

  ngOnInit() {
    this.pageDataService.defineTitulo('Login - CMail');
  }

  handleLogin(formLogin: NgForm) {

    if (formLogin.valid) {
      this.loginService
        .logar(this.login)
        .subscribe(
          () => this.router.navigate(['/inbox']),
          (responseError: HttpErrorResponse) => this.toast.error('Erro: ' + responseError.message)
        )
      // this.httpClient.post('http://localhost:3200/login', this.login)
      // .subscribe(
      //   (response: any) => {
      //     this.toast.success('Login com sucesso.');
      //     localStorage.setItem('TOKEN', response.token);
      //     setTimeout(() => this.router.navigate(['inbox']), 1000);

      //   },
      //   (responseError: HttpErrorResponse) => {
      //     this.toast.error('Login inválido: ' + responseError.message);

      //   }
      // )
    }

  }

}
