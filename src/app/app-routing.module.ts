import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashComponent } from './layout/dash/dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes ,
    {
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
