import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BascisComponent } from './bascis/bascis.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';
import { SelectorPageComponent } from './anidados/countries/pages/selector-page/selector-page.component';
@NgModule({
  declarations: [
    BascisComponent,
    DynamicComponent,
    SwitchesComponent,
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
