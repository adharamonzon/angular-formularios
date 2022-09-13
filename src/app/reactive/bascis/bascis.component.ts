import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bascis',
  templateUrl: './bascis.component.html'
})
export class BascisComponent implements OnInit{

  /* basicForm : FormGroup = new FormGroup({
    'name': new FormControl('Lápiz'),
    'price': new FormControl(2),
    'stock': new FormControl(35)
  }) */

  basicForm : FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(1)]],
  })
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.basicForm.setValue({
      name: 'Boli',
      price: 3,
      stock: 34
    })
  }

  formValid(input: string) {
    return (this.basicForm?.controls[input].errors && this.basicForm?.controls[input].touched)
  }
  save(){
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return;
    }
    console.log(this.basicForm.value)
    this.basicForm.reset();
  }
}
