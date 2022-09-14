import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public namePattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public noStrider = (arg: FormControl) : ValidationErrors | null => {
    const value:string = arg.value?.toLowerCase().trim();
    if (value === 'strider') {
      return {
        noStrider: true
      } 
    }
    return null 
  }

  confirmPassword(pass: string, passConfirm: string){
    return (control : AbstractControl) : ValidationErrors | null => {
      const pass1 = control.get(pass);
      const pass2 = control.get(passConfirm);
      if (pass1 !== pass2) {
        control.get(passConfirm)?.setErrors({noSame: true})
        return {noSame : true}
      }
      control.get(passConfirm)?.setErrors(null)
      return null
    }
  }
}
