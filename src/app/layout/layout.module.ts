import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashComponent } from './dash/dash.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    MainComponent,
    DashboardComponent,
    DashComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    NavbarComponent,
    SidenavComponent,
    MainComponent,
    DashboardComponent,
    DashComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
