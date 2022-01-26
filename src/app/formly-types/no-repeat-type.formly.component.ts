import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
@Component({
  selector: 'formly-no-repeat-section',
  templateUrl: 'no-repeat-type.formly.component.html',
  styles: [
    `
    .datos-solicitante {color: red;}

    .row {
        padding: 1rem;
        margin: 1rem 0;
        background: #e8f1fd;
    }
    `
  ]
})
export class NoRepeatTypeComponent extends FieldArrayType {

  mostrar: boolean = true;

  oculta() {
    //alert('Hiciste clic en el boton, y ahora lo oculto');
    this.mostrar = false;
  }
}