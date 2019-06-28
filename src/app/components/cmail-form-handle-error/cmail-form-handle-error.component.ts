import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-handle-error',
  templateUrl: './cmail-form-handle-error.component.html',
  styles: []
})
export class CmailFormHandleErrorComponent implements OnInit {

  @Input() campo = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
