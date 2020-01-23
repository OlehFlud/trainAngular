import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component'
import {RegisterComponent} from './component/register/register.component'
import {CreateHouseComponent} from './component/create-house/create-house.component'

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'createHouse', component:CreateHouseComponent},
  {path: 'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
