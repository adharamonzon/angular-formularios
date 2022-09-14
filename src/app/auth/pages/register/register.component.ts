import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
//import { namePattern, emailPattern, noStrider } from '../../../shared/validators/validations';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  reactiveForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {
      validators: [this.validatorService.confirmPassword('password', 'confirmPassword')]
    }
  )

  get emailErrorMsg () : string {
    const errors = this.reactiveForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email obligatorio'
    } else if (errors?.['pattern']){
      return 'El email no es correcto'
    } else if (errors?.['emailUsed']) {
      return'El email ya esta registrado'
    }
    return '';
  }
  constructor(private fb : FormBuilder,
              private validatorService : ValidatorService,
              private emailValidator: EmailValidatorService) { }

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
