import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTemplateRoutingModule } from './admin-template-routing.module';
import { AdminTemplateComponent } from './admin-template.component';


@NgModule({
  declarations: [
    AdminTemplateComponent
  ],
  imports: [
    CommonModule,
    AdminTemplateRoutingModule
  ]
})
export class AdminTemplateModule { }
