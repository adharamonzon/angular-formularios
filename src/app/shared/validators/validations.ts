import { FormControl } from "@angular/forms";

export const namePattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noStrider = (arg: FormControl) => {
  const value:string = arg.value?.toLowerCase().trim();
  if (value === 'strider') {
    return {
      noStrider: true
    } 
  }else {
    return 
  }
}