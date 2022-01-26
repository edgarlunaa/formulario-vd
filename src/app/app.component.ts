import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})

export class AppComponent {
	title = 'PROGRAMA VIDA DIGNA'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<FormlyFieldConfig[]>('/assets/campos_json.json')
      .subscribe(fields => {
        this.fields = fields;
      });
  }


	createPdf() {

    if (this.form.valid) {
      
      let modelo = Object.entries(this.model);
      //
      var doc = new jsPDF('p', 'mm', 'a4');
      var img = new Image();
      img.src = 'assets/cabecera.jpg';
      doc.addImage(img, 'jpg', 0, 0);

      doc.setFont('helvetica')

      let m = 30;
      let y = 5;
      let x = 15;
      let i = 0; //
      let ll = 90;
      //var arr:JSON[];

      for (let seccion of modelo) {

        let arr: any = seccion[1];
        if (y > 240 ) {
          doc.addPage();
          doc.addImage(img, 'jpg', 0, 0);
          m = 30;
          y = 5;
          x = 15;
        }

        y = y + 6;
        doc.setFontSize(16);
        doc.setTextColor(45);
        doc.text(seccion[0], x, m + y); //nombre seccion
        doc.line(x, m + y + 1, x + 180, m + y + 1);

        for (var j = 0; j < arr.length; j++) {

          //console.log(reg);
          var res = [];
          var z = 0;
          for (var clave in arr[j]) {
            i++;
            res.push([clave, arr[j][clave]]);
            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
              console.log(e)
            }
            z++;
            var texto = ''
            //RESUELVO SI EL TEXTO ES LARGO O CORTO O SI ES DE UNA COLUMNA U OTRA
            //console.log(registro[1])
            texto = registro[1].toString()

            var text_arr_aux = new Array
            text_arr_aux = []
            text_arr_aux = texto.split("",texto.length)
            console.log(texto)
            console.log(text_arr_aux)
            var text_arr = new Array
            text_arr = []
            var texto_aux = ""
            for(var jj = 0; jj < text_arr_aux.length; jj++){
              texto_aux = texto_aux + text_arr_aux[jj]
              if(jj%115==0 && jj != 0){
                text_arr.push(texto_aux)
                texto_aux = ""
              }
            }
            text_arr.push(texto_aux)
            console.log(texto_aux)
            
            
            if (texto.length > 40) {x = 15; y = y + 12; i++; ll=180}
            else { if (i % 2 != 0 || ll==180 ) { x = 15; y = y + 12; ll=90 }
                  else { x = 110; ll=90 } }
            //ACA PREGUNTO SI ESTOY SALIENDOME DE LA HOJA
            if (y > 240) {
              doc.addPage();
              doc.addImage(img, 'jpg', 0, 0);
              m = 30;
              y = 5;
              x = 15;
            }
            
            doc.setFontSize(10);
            doc.setDrawColor(100);
            for (var ia = 0; ia < text_arr.length; ia++) {                
              doc.text(text_arr[ia], x, m + y); //valor
              y = y + 5             
            }
            y = y - 5
            
            doc.line(x, m + y + 1, x + ll, m + y + 1); // linea horizontal
            doc.setFontSize(8);
            doc.setDrawColor(60);
            doc.text(clave, x, m + y + 5); //key
          }
        }
        i = 0;
        x = 15;
        y = y + 12;
      }
    let nombreArchivo = '00000000000';
    nombreArchivo = this.model['Solicitante'][0]['CUIL'];
      doc.output('dataurlnewwindow');
      doc.save('solicitudVD' + nombreArchivo + '.pdf');


    } 
    if (this.form.invalid) {
        console.log(this.form.controls)
        var fields: any = this.form.controls
        var txt_alert = ""
        for (var seccion of Object.keys(fields)) {
          try {
            for (var clave of Object.keys(fields[seccion]["controls"][0]["controls"])) {
              let campo = fields[seccion]["controls"][0]["controls"][clave]
              try {
                let campos_internos = campo["controls"][0]["controls"]
                for (let campos of Object.keys(campos_internos)) {
                  if (campos_internos[campos]["status"] == "INVALID") {
                    txt_alert = txt_alert + "Falta llenar el campo " + campos + " en " + seccion + "\n"
                  }
                }
              } catch {
  
                if (campo["status"] == "INVALID") {
                  txt_alert = txt_alert + "Falta llenar el campo " + clave + " en " + seccion + "\n"
                }
              }
            }
          } catch (e) {
            console.log(e)
          }
        }
        alert(txt_alert)
      }
    }
}
