import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'cmail-list-item',
    templateUrl: './cmail-list-item.component.html',
    styleUrls: ['./cmail-list-item.component.css'],

})

export class CmailListItemComponent { 

    @Input() destinatario = '';
    @Input() assunto = '';
    @Input() introducaoDoConteudo = '';
    @Input() dataDeEnvio = '';

    @Output() vaiRemover = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    removeEmail(click: Event) {
        if (confirm('Tem certeza?')) {
            this.vaiRemover.emit({ status: 'removing'})
        }
    }

    
}