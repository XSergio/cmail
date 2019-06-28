import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CmailFormModule } from 'src/app/components/cmail-form.module';
import { LoginService } from './login.service';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        CmailFormModule,
    ],
    exports: [
        LoginComponent,
    ],
    providers: [
        LoginService,
    ],
})

export class LoginModule { }