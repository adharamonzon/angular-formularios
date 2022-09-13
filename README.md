# Formularios en angular

## Instalar el proyecto

git clone https://github.com/adharamonzon/angular-formularios.git

npm install

ng serve

# Formularios 

La diferencia entre los formularios de tipo **template** angular se va a encargar de controlar el formulario de manera automática. La mayor parte de la lógica se encontrará en la parte del *HTML* (el *template*).

Los formularios **reactivos** tienen un HTML lo más básico posible y toda la lógica se encuentra en el archivo de *TypeScript*.

Es más común utilizar el tipo template si el formulario va a ser muy sencillo. Sino utilizaremos el formulario de tipo reactivo para tener mayor control sobre el.   

## Templates

+ Evitar la navegación automática del formulario: 
  Hay que importar dentro del módulo que gestione nuestro formulario el *FormsModule* de *@angular-forms*.
  Al instalar el módulo y tenerlo importado, evita la recarga de la página de manera automática. 

+ Obtener información de los campos (input):
  Para ello creamos la referencia del formulario *<form #myForm='ngForm'>* Le indicamos una referencia local=>#myForm y le especificamos el tipo de ngForm. 
  
  *<form (ngSubmit)="save(myForm)" #myForm='ngForm'>* Esta información se la pasamos a la fn de submit para que tenga la información del formulario. 

  Para indicar que campos del formulario son los que tenemos que escuchar, debemos poner dentro del input el *ngModel* para que funcione es necesario que el input tenga el atributo *name*.

## Propiedades de los formularios. 
Los formularios tienen distintas propiedades que nos pueden ayduar a saber que información contienen y como la está utilizando. 

**.value** Nos devolverá cada campo y su valor. 
**.valid** Nos indicará si el formualrios es válido o no. Por ejemplo si alguno de los campos está marcado como *requiered*. 
**.pristine** Indica si se han cambiado o no los valores con los que fue presentado el formulario. *true* indica que no se ha tocado el formulario, con que cambie un campo ya se cambia a *false*. 
**.touched**  Indica si el usuario ha tocado el formularios. *true* indicaría que el usuario ha tocado el formulario. La diferencia con *pristine* es que no hace referencia al valor. Con que el usuario pinche en un input y salga (con o sin cambiar el valor), cambia su valor a true. 
## Control de formularios

  **required** para hacer un campo obligatorio se puede añadirla propiedad required. Esto hará que seá necesario rellenar el campo, pero no tendrá en cuenta otro tipo de errores (ej. numéricos, de longitud, caracteres, etc.)

  **maxlength / minlength** sirve para indicar el número de caracteres que debe tener el campo. Para limitar un máximo o establecer un mínimo. 

  ### Mostrar errores
  Para mostrar los errores debemos acceder a la propiedad de **controls** del formulario. Dentro de esta propiedad se encuentran los errors como un objeto que especifica que error ha saltado y porqué. 
  Para acceder a la propiedad del fomulario que estamos estamos buscando para mostrar el error es necesario acceder de la siguiente manera. 
  ´*ngIf='myForm.contros[propiedad]?.invalid'´ Accedemos a la propiedad a través de los [], ya que al cargar el formulario no está cargada toda la información, le ponermos el ? para que evalue que tenga esa propiedad y si la tiene lo muestre si es invalido.

Para facilitar el control de errores se puede enviar el formulario al componente .ts a traves del decorador **ViewChild()** 
´@ViewChild('myForm') myForm !: NgForm;´ De esta manera podemos crear fn de control en el .ts a la que llamamos en el *ngIf.

## Directiva customizadas: 

Las directivas customizadas sirven para validar nuestro formulario según las necesidades que tengamos. Para ello vamos a crear la directiva. *.directive.ts* e importarla en las declaraciones del module que corresponda.

  ## Formularios Reactivos

Para utilizar los formularios reactivos debemos importar el módulo **ReactiveFormsModule** de esta manera importamos en nuestro archivo .ts **FormControl** con el que podemos declarar los campos de nuestro formulario: 
  *basicForm : FormGroup = new FormGrout({'name': new FormControl('nombre')})*
Esto se puede hacer complejo si el formulario es muy extenso, por lo que se pueden declarar los campos del formlario con el **FormBuilder** 
Para ello hay que importar el servicio en el constructor del *FormBuilder* y luego generar el objeto: 
  *basicForm : FormGroup = this.formBuilder.group({name: 'nombre', validaciones, validaciones asíncronas })*

Para las **validaciones síncronas** : 
  *name: ['name', Validators.requider]*
Se marcan en el areglo tral el valor de la propeidad, hay que utilizar el *Validators* de angular/forms.
Si vamos a marcar más de UN VALIDADOR SÍNCRONO es importante meterlos dentro de un arreglo, ya que si lo separamos por comas estaremos indicando que el siguiente es un validador asíncrono.
  *name: ['name', V[alidators.requider, Validators.minLength(3)]]*