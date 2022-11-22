import { LayoutRoutingModule } from './../layout/layout-routing.module';
import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';
import { KamonaDashComponent } from './kamona-dash/kamona-dash.component';
import { DashboarduiComponent } from './dashboardui/dashboardui.component';
import { ColorDashComponent } from './color-dash/color-dash.component';
import { OutlookComponent } from './outlook/outlook.component';



@NgModule({
  declarations: [
    Dashboard1Component,
    MainComponent,
    KamonaDashComponent,
    DashboarduiComponent,
    ColorDashComponent,
    OutlookComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,

  ]
})
export class MyappsModule { }
