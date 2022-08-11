import { KamonaDashComponent } from './../myapps/kamona-dash/kamona-dash.component';
import { Dashboard1Component } from './../myapps/dashboard1/dashboard1.component';
import { MainComponent } from '../myapps/main/main.component';
import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';


const routes: Routes = [

  { path: '', component: DashComponent ,
  children: [
    { path: 'main', component: MainComponent },
    { path: 'analytics', component: Dashboard1Component },
    { path: 'dash2', component: KamonaDashComponent },
    {path: 'not-found', component: PageNotFoundComponent}]
   },
   {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
