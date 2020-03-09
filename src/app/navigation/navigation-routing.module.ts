import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPage } from './navigation.page';
import { HomeComponent } from "../home/home.component"
import { PersonalComponent } from "../personal/personal.component"

const routes: Routes = [
  {
    path: 'app',
    component: NavigationPage,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'personal',
        component:PersonalComponent
      },
      {
        path: '',
        redirectTo: 'app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationPageRoutingModule {}
