import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CmailFormModule } from 'src/app/components/cmail-form.module';
import { CadastroRoutingModule } from './cadastro-routing.module';


@NgModule({
    declarations: [
        CadastroComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        SharedComponentsModule,
        CmailFormModule,
        CadastroRoutingModule,
    ],
    exports: [
        CadastroComponent,
    ],
})

export class CadastroModule {}