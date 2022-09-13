import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {

  constructor( private fb : FormBuilder) { }
    switchForm : FormGroup = this.fb.group({
      gender: ['F', Validators.required],
      notifications: [true, Validators.required],
      terms: [false, Validators.requiredTrue]
    })

    user = {
      gender: 'M',
      notifications: true
    }
  ngOnInit(): void {
    this.switchForm.reset({
      ...this.user,
      terms: false
    })
    //para que se actualice el formulario segun se cambia, no dandole al btn
    /* this.switchForm.valueChanges.subscribe(form => {
      console.log(form);
    }) */
  }

  save() {
    const formValue = {...this.switchForm.value};
    this.user = formValue
  }
}
