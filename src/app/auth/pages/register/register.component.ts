import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
//import { namePattern, emailPattern, noStrider } from '../../../shared/validators/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  reactiveForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.noStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {
    validators: [this.validatorService.confirmPassword('password', 'confirmPassword')]
  }
  )
  constructor(private fb : FormBuilder,
              private validatorService : ValidatorService) { }

  ngOnInit(): void {
    this.reactiveForm.reset({
      name: 'Marta Pe',
      email: 'mp@jfes.es',
      username: 'mape'
    })
  }

  nameInvalid(term : string){
    return this.reactiveForm.get(term)?.invalid
            && this.reactiveForm.get(term)?.touched
  }

  submitForm(){
    console.log(this.reactiveForm.value);
    this.reactiveForm.markAllAsTouched()
    
  }
}
