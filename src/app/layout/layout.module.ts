import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';

import { DashComponent } from './dash/dash.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    MainComponent,

    DashComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,


  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    MainComponent,

    DashComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
