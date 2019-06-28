import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';
import { CmailFormHandleErrorComponent } from './cmail-form-handle-error/cmail-form-handle-error.component';


@NgModule({
    declarations: [
        CmailFormGroupComponent,
        CmailFormFieldDirective,
        CmailFormHandleErrorComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CmailFormGroupComponent,
        CmailFormFieldDirective,
        CmailFormHandleErrorComponent,
    ],
})

export class CmailFormModule { }