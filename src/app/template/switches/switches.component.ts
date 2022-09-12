import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {
 user = {
  gender: 'f',
  notifications: true,
  terms: false
 }
}
