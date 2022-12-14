import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BascisComponent } from './bascis/bascis.component';
import { SwitchesComponent } from './switches/switches.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SelectorPageComponent } from './anidados/countries/pages/selector-page/selector-page.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basics', component: BascisComponent},
      {path: 'dynamic', component: DynamicComponent},
      {path: 'switches', component: SwitchesComponent},
      {path: 'anidados', component: SelectorPageComponent},
      {path: '**', redirectTo: 'basics'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ReactiveRoutingModule { }
