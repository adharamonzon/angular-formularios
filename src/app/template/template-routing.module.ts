import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basics', component: BasicsComponent},
      {path: 'dynamic', component: DynamicComponent},
      {path: 'switches', component: SwitchesComponent},
      {path: '**', redirectTo: 'basics'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TemplateRoutingModule { }
