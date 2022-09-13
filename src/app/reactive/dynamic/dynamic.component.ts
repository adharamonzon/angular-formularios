import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html'
})
export class DynamicComponent implements OnInit {
  dynamicForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Libro 1', Validators.required],
      ['Libro 2', Validators.required]
    ], Validators.required)
  })

  newFav : FormControl = this.fb.control('',Validators.required);

  get favoritesArr() {
    return this.dynamicForm.get('favorites') as FormArray;
  }
  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  inputValid(input : string) {
   return (this.dynamicForm.controls[input].errors && this.dynamicForm.controls[input].touched)
  }

  addFav() {
    if (this.newFav.invalid){ return };

    this.favoritesArr.push(new FormControl(this.newFav.value, Validators.required))
  }

  save(){
    if (this.dynamicForm.valid){
      console.log(this.dynamicForm.value);
    } else {
      this.dynamicForm.markAllAsTouched()
    }
  }

  delete(i: number) {
    this.favoritesArr.removeAt(i)
  }
}
