import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'


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

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-solicitante',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos del solicitante:</h2></div>',
    },


    // EMPRESA

    {
      key: 'Solicitante',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar datos del solicitante',
      },
      fieldArray: {
        fieldGroup: [
        {
          key: 'Nombres',
          type: 'input',
          templateOptions: {
            label: 'Nombres',
            placeholder: 'Ingrese el/los nombre/s',
            required: true,
          },
        },
        {
          key: 'Apellidos',
          type: 'input',
          templateOptions: {
            label: 'Apellidos',
            placeholder: 'Ingrese el/los apellido/s',
            required: true,
          },
        },
        {
          key: 'Genero',
          type: 'select',
          templateOptions: {
            label: 'Genero',
            options:[
              {value: 'Femenino', label: 'Femenino'},
              {value: 'Masculino', label: 'Masculino'},
            ],
            required: true,
          },
        },
        {
          key: 'Estado civil',
          type: 'select',
          templateOptions: {
            label: 'Estado civil',
            options: [
              {value: 'Soltero', label: 'Soltero'},
              {value: 'Casado', label: 'Casado'},
              {value: 'Divorciado', label: 'Divorciado'},
              {value: 'Separado', label: 'Separado'},
              {value: 'Viudo', label: 'Viudo'},
              {value: 'Concubino', label: 'Concubino'},
            ],
            required: true,
          },
        },
        {
          key: 'Fecha de nacimiento',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Fecha de nacimiento',
            required: true,
          },
        },
        {
          key: 'Tel??fono',
          type: 'input',
          templateOptions: {
            label: 'Tel??fono',
            placeholder: 'Ingrese su tel??fono',
            pattern: '\\d{1,25}',
            required: true,
          },
        },
        {
          key: 'Tel??fono alternativo',
          type: 'input',
          templateOptions: {
            label: 'Tel??fono alternativo',
            placeholder: 'Ingrese su tel??fono alternativo',
          },
        },
        {
          key: 'Tipo de documento',
          type: 'select',
          templateOptions: {
            label: 'Tipo de documento',
            options:[
              {value: 'DNI', label: 'DNI'},
              {value: 'LC', label: 'LC'},
              {value: 'LE', label: 'LE'},
              {value: 'Pasaporte', label: 'Pasaporte'},
            ],
            required: true,
          },
        },
        {
          key: 'N??mero de documento',
          type: 'input',
          templateOptions: {
            label: 'N??mero de documento',
            placeholder: 'Ingrese su n??mero de documento',
            pattern: '\\d{7,8}',
            required: true,
          },
        },
        {
          key: 'CUIL',
          type: 'input',
          templateOptions: {
            label: 'CUIL',
            placeholder: 'Ingrese su CUIL',
            pattern: '\\d{11}',
            required: true,
          },
        },
        {
          key: 'Mail (CIDI)',
          type: 'input',
          templateOptions: {
            label: 'Mail (CIDI)',
            placeholder: 'Ingrese su mail de CIDI',
            required: true,
          },
        },
      ],
    },
  },

 //--------------------------------------------------------------------------------------------------------

  {
    className: 'ocupacion-titular',
    template: '<div><h2>Ocupaci??n del titular:</h2></div>',
  },

  {
    key: 'Ocupaci??n del titular',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar ocupaci??n del titular',
    },
    fieldArray: {
      fieldGroup: [
      {
        key: 'Ocupaci??n',
        type: 'select',
        templateOptions: {
          label: 'Ocupaci??n',
          options:[
            {value: 'Ama de casa', label: 'Ama de casa'},
            {value: 'Changarin', label: 'Changarin'},
            {value: 'Estudiante', label: 'Estudiante'},
            {value: 'Inactivo', label: 'Inactivo'},
            {value: 'Jubilado/Pensionado', label: 'Jubilado/Pensionado'},
            {value: 'Patr??n o empleador', label: 'Patr??n o empleador'},
            {value: 'Servicio dom??stico', label: 'Servicio dom??stico'},
            {value: 'Trabajo voluntario', label: 'Trabajo voluntario'},
            {value: 'Cuenta propia', label: 'Cuenta propia'},
            {value: 'Cuidado dom??stico sin remuneraci??n', label: 'Cuidado dom??stico sin remuneraci??n'},
            {value: 'Desocupado', label: 'Desocupado'},
            {value: 'Econom??a popular/asociativo', label: 'Econom??a popular/asociativo'},
            {value: 'Empleado de un sector privado', label: 'Empleado de un sector privado'},
          ],
          required: true,
        },
      },
      {
        key: 'Condici??n laboral',
        type: 'select',
        templateOptions: {
          label: 'Condici??n laboral',
          options:[
            {value: 'Formal', label: 'Formal'},
            {value: 'Informal', label: 'Informal'},
          ],
          required: true,
        },
      },
      {
        key: 'Frecuencia laboral',
        type: 'select',
        templateOptions: {
          label: 'Frecuencia laboral',
          options: [
            {value: 'Permanente', label: 'Permanente'},
            {value: 'Espor??dico', label: 'Espor??dico'},
            {value: 'Temporario', label: 'Temporario'},
          ]
        }
      }
    ],
  },
},

  //--------------------------------------------------------------------------------------------------------

  {
    className: 'datos-salud',
    template: '<div><h2>Salud:</h2></div>',
  },
  {
    key: 'Salud',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de Salud',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: '??Alg??n integrante tiene alguna enfermedad cr??nica?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '??Alg??n integrante tiene alguna enfermedad cr??nica?',
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '??Cu??l?',
          type: 'input',
          templateOptions:{
            label: '??Cu??l?',
            placeholder: 'Ingrese una descripci??n'
          }
        },
        {
          key: '??Alg??n integrante tiene discapacidad?',
          type: 'select',
          templateOptions:{
            label: '??Alg??n integrante tiene discapacidad?',
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ],
            required: true
          }
        },
        {
          key: '??De que tipo?',
          type: 'select',
          templateOptions:{
            label: '??De que tipo?',
            options:[
              {value: 'Fisica/Motr??z', label: 'Fisica/Motr??z'},
              {value: 'Sensoral (visual, auditiva o del habla)', label: 'Sensoral (visual, auditiva o del habla)'},
              {value: 'Mental', label: 'Mental'},
              {value: 'Otra', label: 'Otra'},
            ]
          }
        },
        {
          key: 'Otra',
          type: 'input',
          templateOptions:{
            label: 'Otra',
            placeholder: 'Ingrese una descripci??n'
          }
        },
        {
          key: '??Posee certificado CUD?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '??Posee certificado CUD?',
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '??Alguna integrante del grupo familiar esta embarazada?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '??Alguna integrante del grupo familiar esta embarazada?',
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: 'Meses de embarazo',
          type: 'input',
          templateOptions:{
            label: 'Meses de embarazo',
            pattern: '\\d{1}',
            placeholder: 'Ingrese la cantidad de meses de embarazo'
          }
        },
        {
          key: '??Poseen obra social?',
          type: 'select',
          templateOptions:{
            label: '??Poseen obra social?',
            required: true,
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: 'Gasto mensual de la obra social',
          type: 'input',
          templateOptions: {
            label: 'Gasto mensual de la obra social',
            placeholder: 'Ingrese un gasto mensual'
          }
        },
        {
          key: '??Realiza gastos en medicamentos?',
          type: 'select',
          templateOptions: {
            label: '??Realiza gastos en medicamentos?',
            required: true,
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '??Cu??nto?',
          type: 'input',
          templateOptions: {
            label: '??Cu??nto?',
            placeholder: 'Ingrese una cantidad en pesos',
            pattern: '\\d{1,25}'
          }
        }
  ]}},


//-------------------------------------------------------------------------------------------------------

  {
    className: 'datos-personales-otros-ocupantes',
    template: '<div><h3>Datos personales de otros ocupantes del inmueble:</h3></div>',
  },
  {
    key: 'Datos personales de otros ocupantes del inmueble',
    type: 'repeat',
    templateOptions:{
      addText: 'Agregar ocupante'
    },
    fieldArray:{
      fieldGroup:[
        {
          key: 'Apellidos',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Apellidos',
            placeholder: 'Ingrese un/os apellido/s'
          }
        },
        {
          key: 'Nombres',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Nombres',
            placeholder: 'Ingrese un/os nombre/s'
          }
        },
        {
          key: 'DNI',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'DNI',
            placeholder: 'Ingrese un DNI',
            pattern: '\\d{7,8}'
          }
        },
        {
          key: 'Fecha de nacimiento',
          type: 'input',
          templateOptions:{
            type: 'date',
            required: true,
            label: 'Fecha de nacimiento',
          }
        },
        {
          key: 'Genero',
          type: 'select',
          templateOptions:{
            required: true,
            label: 'Genero',
            options:[
              {value: 'Femenino', label: 'Femenino'},
              {value: 'Masculino', label: 'Masculino'},
            ]
          }
        },
        {
          key: 'Ocupaci??n',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Ocupaci??n',
            placeholder: 'Ingrese una ocupaci??n'
          }
        },
        {
          key: 'Ingreso',
          type: 'input',
          templateOptions:{
            label: 'Ingreso',
            placeholder: 'Ingrese un ingreso',
            pattern: '\\d{1,25}'
          }
        },
        {
          key: 'V??nculo con el solicitante',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'V??nculo con el solicitante',
            placeholder: 'Ingrese un vinculo'
          }
        },
      ]
    }
  },
  
  //--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-ampliacion',
    template: '<div><h2>Datos de la ampliaci??n solicitada</h2></div>',
  },
  {
    key: 'Ampliaci??n solicitada',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de la ampliaci??n solicitada',
    },
    fieldArray: {
      fieldGroup: [  
        {
          template: '<div><h2>Habitaci??n</h2></div>'
        },
        {
          key: 'Cantidad de habitaciones que posee la vivienda',
          type: 'input',
          templateOptions:{
            label: 'Cantidad de habitaciones que posee la vivienda',
            placeholder: 'Ingrese una cantidad de habitaciones',
            required: true,
            pattern: '\\d{1,2}'
          }
        },
        {
          template: '<h2>Ba??o</h2>'
        },
        {
          key: 'Ba??o',
          type: 'select',
          templateOptions:{
            label: 'Ba??o',
            options:[
              {value: 'Uso compartido', label: 'Uso compartido'},
              {value: 'Uso exclusivo', label: 'Uso exclusivo'},
              {value: 'No posee', label: 'No posee'},
            ],
            required: true
          },
        },
      ]
    }
  },
  //--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-ubicacion',
    template: '<div><h2>Datos de la ubicaci??n de la vivienda</h2></div>',
  },
  {
    key: 'Datos de la ubicaci??n de la vivienda',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de ubicaci??n',
    },
    fieldArray: {
      fieldGroup: [ 
        {
          key: 'Ubicaci??n',
          type: 'select',
          templateOptions:{
            label: 'ubicaci??n',
            options: [
              {value: 'Asentamiento', label: 'Asentamiento'},
              {value: 'Barrio de vivienda precaria', label: 'Barrio de vivienda precaria'},
              {value: 'Barrio de vivienda social', label: 'Barrio de vivienda social'},
              {value: 'Barrio residencial', label: 'Barrio residencial'},
              {value: 'Villa de emergencia', label: 'Villa de emergencia'},
              {value: 'Zona rural', label: 'Zona rural'},
            ],
            required: true
          }
        },
        {
          key: 'Tipo de vivienda',
          type: 'select',
          templateOptions:{
            label: 'Tipo de vivienda',
            options:[
              {value: 'Casa', label: 'Casa'},
              {value: 'Casilla', label: 'Casilla'},
              {value: 'Departamento', label: 'Departamento'},
              {value: 'Pieza anexada', label: 'Pieza anexada'},
              {value: 'Rancho', label: 'Rancho'},
              {value: 'Otro', label: 'Otro'},
            ],
            required: true
          },
        },
        {
          key: 'Otro',
          type: 'input',
          templateOptions:{
            label: 'Otro',
            placeholder: 'Ingrese otro tipo de vivienda'
          }
        }
      ]
    }
  },
  //--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-vivienda',
    template: '<div><h2>Datos de la vivienda</h2></div>',
  },
  {
    key: 'Datos de la vivienda',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de la vivienda',
    },
    fieldArray: {
      fieldGroup: [ 
        {
          key: 'Tipo de propietario',
          type: 'select',
          templateOptions:{
            label: 'Tipo de propietario',
            options: [
              {value: 'Propietario de vivienda y terreno', label: 'Propietario de vivienda y terreno'},
              {value: 'Propietario de solo vivienda', label: 'Propietario de solo vivienda'},
            ],
            required: true
          }
        },
        {
          key: 'Documento a presentar poseedor de titulo de due??o',
          type: 'select',
          templateOptions:{
            label: 'Documento a presentar poseedor de titulo de due??o',
            options:[
              {value: 'Boleto compra-venta', label: 'Boleto compra-venta'},
              {value: 'Sentencia firme de juicio usucapi??n', label: 'Sentencia firme de juicio usucapi??n'},
              {value: 'Auto declaraci??n de herederos', label: 'Auto declaraci??n de herederos'},
              {value: 'Declaraci??n jurada de herederos con acreditaci??n de vinculo', label: 'Declaraci??n jurada de herederos con acreditaci??n de vinculo'},
              {value: 'Resoluci??n de inscripci??n en registro de poseedor LEY 9150', label: 'Resoluci??n de inscripci??n en registro de poseedor LEY 9150'},
            ],
            required: true
          },
        },
        {
          key: 'Ocupante por pr??stamo',
          type: 'select',
          templateOptions:{
            label: 'Ocupante por pr??stamo',
            options: [
              {value: 'De un familiar', label: 'De un familiar'},
              {value: 'Por pago de impuestos/expensas', label: 'Por pago de impuestos/expensas'},
              {value: 'Ocupante gratuito (sin permiso)', label: 'Ocupante gratuito (sin permiso)'},
              {value: 'Ocupante de hecho (con permiso)', label: 'Ocupante de hecho (con permiso)'},
              {value: 'En un relaci??n de depandencia', label: 'En un relaci??n de depandencia'},
              {value: 'Otra situaci??n', label: 'Otra situaci??n'},
            ]
          }
        },
        {
          key: '??Posee otra vivienda?',
          type: 'select',
          templateOptions:{
            label: '??Posee otra vivienda?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '??Posee ba??o?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '??Posee ba??o?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: 'Tipo ba??o',
          type: 'select',
          templateOptions:{
            label: 'Tipo de ba??o',
            options: [
              {value: 'Con indoro', label: 'Con inodoro'},
              {value: 'Retrete con descarga de agua', label: 'Retrete con descarga de agua'},
            ]
          }
        },
        {
          template: '<h2>Servicios que posee dentro de la vivienda</h2>'
        },
        {
          key: 'Luz',
          type: 'select',
          templateOptions:{
            label: 'Luz',
            required: true,
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: 'Agua',
          type: 'select',
          templateOptions:{
            label: 'Agua',
            required: true,
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: 'Gas natural',
          type: 'select',
          templateOptions:{
            required: true,
            label: 'Gas natural',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: 'Gas envasado',
          type: 'select',
          templateOptions:{
            required: true,
            label: 'Gas envasado',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          template: '<p>Eliminaci??n de excretas</p>'
        },
        {
          key: 'Tipo de eliminacion de excretas',
          type: 'select',
          templateOptions:{
            label: 'Tipo de eliminacion de excretas',
            options:[
              {value: 'Desag??e cloacal', label: 'Desag??e cloacal'},
              {value: 'Pozo negro y c??mara', label: 'Pozo negro y c??mara'},
              {value: 'Pozo en la tierra', label: 'Pozo en la tierra'},
            ]
          }
        },
      ]
    }
  },
]

  

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


    } else (error) => {
        console.error('error:', error);
      } 
      if (this.form.invalid) {
        alert("falta completar datos")
      }
    }
}
