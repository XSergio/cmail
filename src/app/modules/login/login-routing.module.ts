import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const rotasLogin: Routes = [
    { path: '', component: LoginComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(rotasLogin)
    ],
    exports: [
        RouterModule
    ],
})

export class LoginRoutingModule { }