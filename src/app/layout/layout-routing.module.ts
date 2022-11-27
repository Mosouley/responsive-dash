import { OutlookComponent } from './../myapps/outlook/outlook.component';
import { ProfileComponent } from './../myapps/profile/profile.component';
import { BookmarkAppComponent } from './../myapps/bookmark-app/bookmark-app.component';
import { ColorDashComponent } from './../myapps/color-dash/color-dash.component';
import { DashboarduiComponent } from './../myapps/dashboardui/dashboardui.component';
import { KamonaDashComponent } from './../myapps/kamona-dash/kamona-dash.component';
import { MainComponent } from '../myapps/main/main.component';
import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';


const routes: Routes = [

  { path: '', component: DashComponent ,
  children: [
    { path: 'main', component: MainComponent },
    { path: 'analytics', component: ProfileComponent },
    { path: 'outlook', component: OutlookComponent },
    { path: 'dash-ui', component: DashboarduiComponent },
    { path: 'dash2', component: KamonaDashComponent },
    { path: 'color-dash', component: ColorDashComponent },
    { path: 'bookmark', component: BookmarkAppComponent },
    { path: 'profile', component: ProfileComponent },
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
