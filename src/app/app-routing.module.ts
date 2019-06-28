import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { EdicaoComponent } from './modules/edicao/edicao.component';

const rotas: Routes = [
    { path: '', loadChildren: 'src/app/modules/login/login.module#LoginModule' },
    { path: 'inbox', component: CaixaDeEntradaComponent, canActivate: [AuthGuard] },
    { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
    { path: 'edicao/:id', component: EdicaoComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'inbox'} //tem que ficar por último!!!
]

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
    ],
})

export class RoutingModule { }
