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
              {value: 'No binario', label: 'No binario'},
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
          key: 'Teléfono',
          type: 'input',
          templateOptions: {
            label: 'Teléfono',
            placeholder: 'Ingrese su teléfono',
            pattern: '\\d{1,25}',
            required: true,
          },
        },
        {
          key: 'Teléfono alternativo',
          type: 'input',
          templateOptions: {
            label: 'Teléfono alternativo',
            placeholder: 'Ingrese su teléfono alternativo',
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
          key: 'Número de documento',
          type: 'input',
          templateOptions: {
            label: 'Número de documento',
            placeholder: 'Ingrese su número de documento',
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
    className: 'ocupacion-solicitante',
    template: '<div><h2>Ocupación del solicitante:</h2></div>',
  },

  {
    key: 'Ocupación del solicitante',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar ocupación del titular',
    },
    fieldArray: {
      fieldGroup: [
      {
        key: 'Ocupación',
        type: 'select',
        templateOptions: {
          label: 'Ocupación',
          multiple: true,
          options:[
            {value: 'Ama de casa', label: 'Ama de casa'},
            {value: 'Changarin', label: 'Changarin'},
            {value: 'Estudiante', label: 'Estudiante'},
            {value: 'Inactivo', label: 'Inactivo'},
            {value: 'Jubilado/Pensionado', label: 'Jubilado/Pensionado'},
            {value: 'Patrón o empleador', label: 'Patrón o empleador'},
            {value: 'Servicio doméstico', label: 'Servicio doméstico'},
            {value: 'Trabajo voluntario', label: 'Trabajo voluntario'},
            {value: 'Cuenta propia', label: 'Cuenta propia'},
            {value: 'Cuidado doméstico sin remuneración', label: 'Cuidado doméstico sin remuneración'},
            {value: 'Desocupado', label: 'Desocupado'},
            {value: 'Economía popular/asociativo', label: 'Economía popular/asociativo'},
            {value: 'Empleado de un sector privado', label: 'Empleado de un sector privado'},
          ],
          required: true,
        },
      },
      {
        key: 'Condición laboral',
        type: 'select',
        templateOptions: {
          label: 'Condición laboral',
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
            {value: 'Esporádico', label: 'Esporádico'},
            {value: 'Temporario', label: 'Temporario'},
          ]
        }
      },
      {
        key: 'Ingreso promedio mensual de ingresos',
        type: 'input',
        templateOptions: {
          label: 'Ingreso promedio mensual de ingresos',
          placeholder: 'Ingrese una cantidad en pesos',
          pattern: '\\d{1,25}'
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
          key: '¿Algún integrante tiene alguna enfermedad crónica?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '¿Algún integrante tiene alguna enfermedad crónica?',
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Cuál?',
          type: 'input',
          templateOptions:{
            label: '¿Cuál?',
            placeholder: 'Ingrese una descripción'
          }
        },
        {
          key: '¿Algún integrante tiene discapacidad?',
          type: 'select',
          templateOptions:{
            label: '¿Algún integrante tiene discapacidad?',
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ],
            required: true
          }
        },
        {
          key: '¿De que tipo?',
          type: 'select',
          templateOptions:{
            label: '¿De que tipo?',
            options:[
              {value: 'Fisica/Motríz', label: 'Fisica/Motríz'},
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
            placeholder: 'Ingrese una descripción'
          }
        },
        {
          key: '¿Posee certificado CUD?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '¿Posee certificado CUD?',
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Alguna integrante del grupo familiar esta embarazada?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '¿Alguna integrante del grupo familiar esta embarazada?',
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
          key: '¿Poseen obra social?',
          type: 'select',
          templateOptions:{
            label: '¿Poseen obra social?',
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
          key: '¿Realiza gastos en medicamentos?',
          type: 'select',
          templateOptions: {
            label: '¿Realiza gastos en medicamentos?',
            required: true,
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Cuánto?',
          type: 'input',
          templateOptions: {
            label: '¿Cuánto?',
            placeholder: 'Ingrese una cantidad en pesos',
            pattern: '\\d{1,25}'
          }
        }
  ]}},


//-------------------------------------------------------------------------------------------------------

  {
    className: 'datos-personales-otros-ocupantes',
    template: '<div><h2>Datos personales de otros ocupantes del inmueble:</h2></div>',
    
  },
  {
    key: 'Cantidad de personas que viven con usted',
    type: 'input',
    templateOptions: {
      label: 'Cantidad de personas del grupo conviviente',
      placeholder: 'Ingrese cantidad'
    }
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
            placeholder: 'Ingrese un/los apellido/s'
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
          key: 'Ocupación',
          type: 'select',
          templateOptions: {
            label: 'Ocupación',
            multiple: true,
            options:[
              {value: 'Ama de casa', label: 'Ama de casa'},
              {value: 'Changarin', label: 'Changarin'},
              {value: 'Estudiante', label: 'Estudiante'},
              {value: 'Inactivo', label: 'Inactivo'},
              {value: 'Jubilado/Pensionado', label: 'Jubilado/Pensionado'},
              {value: 'Patrón o empleador', label: 'Patrón o empleador'},
              {value: 'Servicio doméstico', label: 'Servicio doméstico'},
              {value: 'Trabajo voluntario', label: 'Trabajo voluntario'},
              {value: 'Cuenta propia', label: 'Cuenta propia'},
              {value: 'Cuidado doméstico sin remuneración', label: 'Cuidado doméstico sin remuneración'},
              {value: 'Desocupado', label: 'Desocupado'},
              {value: 'Economía popular/asociativo', label: 'Economía popular/asociativo'},
              {value: 'Empleado de un sector privado', label: 'Empleado de un sector privado'},
            ],
            required: true,
          },
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
          key: 'Vínculo con el solicitante',
          type: 'input',
          templateOptions:{
            required: true,
            label: 'Vínculo con el solicitante',
            placeholder: 'Ingrese un vinculo'
          }
        },
      ]
    }
  },
  
  //--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-ampliacion',
    template: '<div><h2>Tipo de mejora a realizar</h2></div>',
  },
  {
    key: 'Ampliación solicitada',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de la ampliación solicitada',
    },
    fieldArray: {

      fieldGroup: [
        {
          key: 'Donde realizará la mejora',
          type: 'select',
          templateOptions:{
            label: 'Donde realizará la mejora',
            options:[
              {value: 'Baño', label: 'Baño'},
              {value: 'Habitación', label: 'Habitación'},
            ],
            required: true
          },
        },  
        {
          key: 'Cantidad de habitaciones que posee la vivienda actualmente',
          type: 'input',
          templateOptions:{
            label: 'Cantidad de habitaciones que posee la vivienda actualmente',
            placeholder: 'Ingrese una cantidad de habitaciones',
            required: true,
            pattern: '\\d{1,2}'
          }
        },
        {
          key: 'Baño',
          type: 'select',
          templateOptions:{
            label: 'Baño',
            options:[
              {value: 'No tiene', label: 'No tiene'},
              {value: 'Uso compartido', label: 'Uso compartido'},
              {value: 'Instalación incompleta', label: 'Instalación incompleta'},
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
    template: '<div><h2>Datos de la ubicación de la vivienda</h2></div>',
  },
  {
    key: 'Datos de la ubicación de la vivienda',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de ubicación',
    },
    fieldArray: {
      fieldGroup: [ 
        {
          key: 'Ubicación',
          type: 'select',
          templateOptions:{
            label: 'ubicación',
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
          key: 'Indicaciones de referencia',
          type: 'input',
          templateOptions:{
            label: 'Indicaciones de referencia',
            placeholder: 'Avenidas, edificios públicos, locales comerciales conocidos'
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
          key: '¿Es propietario de la vivienda',
          type: 'input',
          templateOptions:{
            label: '¿Es propietario de la vivienda',
            placeholder: 'Avenidas, edificios públicos, locales comerciales conocidos'
          }
        }, 
        {
          key: 'Tipo de propietario',
          type: 'select',
          templateOptions:{
            label: 'Tipo de propietario',
            options: [
              {value: 'Propietario de vivienda y terreno', label: 'Propietario de vivienda y terreno'},
              {value: 'Propietario de solo vivienda', label: 'Propietario de solo vivienda'},
            ],
          }
        },
        {
          key: 'Documentación que acredita posesión a título de dueño',
          type: 'select',
          templateOptions:{
            label: 'Documentación que acredita posesión a título de dueño',
            options:[
              {value: 'Escritura', label: 'Escritura'},
              {value: 'Boleto compra-venta', label: 'Boleto compra-venta'},
              {value: 'Sentencia firme de juicio usucapión', label: 'Sentencia firme de juicio usucapión'},
              {value: 'Auto declaración de herederos', label: 'Auto declaración de herederos'},
              {value: 'Declaración jurada con años de permanencia en la vivienda', label: 'Declaración jurada con años de permanencia en la vivienda'},
              {value: 'Resolución de inscripción en registro de poseedor LEY 9150', label: 'Resolución de inscripción en registro de poseedor LEY 9150'},
            ],
            required: true
          },
        },
        {
          key: 'Ocupante por préstamo',
          type: 'select',
          templateOptions:{
            label: 'Ocupante por préstamo',
            options: [
              {value: 'De un familiar', label: 'De un familiar'},
              {value: 'Por pago de impuestos/expensas', label: 'Por pago de impuestos/expensas'},
              {value: 'Ocupante gratuito (sin permiso)', label: 'Ocupante gratuito (sin permiso)'},
              {value: 'Ocupante de hecho (con permiso)', label: 'Ocupante de hecho (con permiso)'},
              {value: 'En un relación de depandencia', label: 'En un relación de depandencia'},
              {value: 'Otra situación', label: 'Otra situación'},
            ]
          }
        },
        {
          key: '¿Posee otra vivienda?',
          type: 'select',
          templateOptions:{
            label: '¿Posee otra vivienda?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Posee baño?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '¿Posee baño?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: 'Tipo baño',
          type: 'select',
          templateOptions:{
            label: 'Tipo de baño',
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
          template: '<p>Eliminación de excretas</p>'
        },
        {
          key: 'Tipo de eliminacion de excretas',
          type: 'select',
          templateOptions:{
            label: 'Tipo de eliminacion de excretas',
            options:[
              {value: 'Desagüe cloacal', label: 'Desagüe cloacal'},
              {value: 'Pozo negro y cámara', label: 'Pozo negro y cámara'},
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
