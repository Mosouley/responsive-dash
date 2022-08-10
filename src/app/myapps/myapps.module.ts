import { LayoutRoutingModule } from './../layout/layout-routing.module';
import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    Dashboard1Component,
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,

  ]
})
export class MyappsModule { }