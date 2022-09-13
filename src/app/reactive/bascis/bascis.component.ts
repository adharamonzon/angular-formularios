import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bascis',
  templateUrl: './bascis.component.html'
})
export class BascisComponent {

  /* basicForm : FormGroup = new FormGroup({
    'name': new FormControl('Lápiz'),
    'price': new FormControl(2),
    'stock': new FormControl(35)
  }) */

  basicForm : FormGroup = this.formBuilder.group({
    name: ['Lápiz', [Validators.required, Validators.minLength(3)]],
    price: [2, [Validators.required, Validators.min(1)]],
    stock: [35, [2, [Validators.required, Validators.min(0)]]
  })
  constructor(private formBuilder : FormBuilder) { }


}
