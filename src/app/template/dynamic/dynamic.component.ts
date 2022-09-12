import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string,
  favorites: Favorite[]
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html'
})
export class DynamicComponent {

  @ViewChild('dynamicForm') dynamicForm! : NgForm

  newBook : string = ''
  user: Person = {
    name: 'Sara',
    favorites: [
      {id: 1, name: "Una habitación sin wifi"},
      {id: 2, name: "Bomba de Humo"},
      {id: 3, name: "Un país con tu nombre"}
    ]
  }

  save() {
    console.log('Se ha guardado correctamente');
    console.log(this.dynamicForm.value);
  }

  delete(i: number) {
    this.user.favorites.splice(i,1)
  }

  addBook(){
    const newFav : Favorite = {
      id: this.user.favorites.length,
      name: this.newBook
    }
    this.user.favorites.push({...newFav})
    this.newBook = '';
  }
}
