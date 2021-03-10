import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
@Component({
  selector: 'formly-repeat-section',
  templateUrl: './repeat-type.formly.component.html',
  styles: [
    `
      .row {
        padding: 1rem;
        margin: 1rem 0;
        background: #e8f1fd;
      }
    `,
  ],
})
export class RepeatTypeComponent extends FieldArrayType {
  mostrar: boolean = true;

  oculta() {
    //alert('Hiciste clic en el boton, y ahora lo oculto');
    this.mostrar = false;
  }

  borrar(i: number) {
    console.log(i);
    this.remove(i);
    if (i === 0 || !i) {
      this.mostrar = true;
    }
  }

  agregar(i) {
    this.add();
    console.log(i);
  }
}
