import { Directive, ElementRef, OnInit } from "@angular/core";
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Directive({
    selector: "[cmailFormField]"
})
export class CmailFormFieldDirective implements OnInit {

    constructor(private campo: ElementRef) { }

    ngOnInit() {
        const campo = this.campo.nativeElement;
        if (campo.name) {
            campo.id = campo.name;
            campo.classList.add("mdl-textfield__input");
            campo.setAttribute('placeholder'," "); //campo.placeholder = " "; works too...
        } else {
            throw new Error('Atributo *name* na tag input é obrigatório.')
        }
    }
}
