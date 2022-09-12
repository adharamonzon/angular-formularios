import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {
  
  @ViewChild('myForm') myForm! : NgForm;

  initialForm = {
    product: '',
    price: 0,
    stock: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  controlName() : boolean {
    return this.myForm?.controls['product']?.invalid && 
           this.myForm?.controls['product']?.touched
  }
  controlPrice() : boolean {
    return this.myForm?.controls['price']?.value < 0 &&
           this.myForm?.controls['price']?.touched
  }
  //opción cuando no se importaba el formulario a través del ViewChild
  /* save(myForm : NgForm){
    console.log(myForm);.value
  } */

  //con ViewChild:
  save() {
    console.log('Formulario guardado correctamente')
    this.myForm.resetForm({
      price: 0,
      stock: 0 
    });
  }
}
