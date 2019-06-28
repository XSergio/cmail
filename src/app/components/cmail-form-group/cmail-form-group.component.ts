import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styles: []
})
export class CmailFormGroupComponent implements OnInit {

  idCampo = '';
  textoDaLabel = '';
  @Input() controleCampo = new FormControl();
  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    const campo = this.elemento.nativeElement.querySelector('input');
    if (campo.name) {
      this.textoDaLabel = campo.name.replace(campo.name[0], campo.name[0].toUpperCase());
      this.idCampo = campo.name
    } else {
      throw new Error('Atributo *name* na tag input é obrigatório.')
    }

  }

}
