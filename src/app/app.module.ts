import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateHouseComponent } from './component/create-house/create-house.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SearchComponent } from './component/search/search.component';
import { ShowAllComponent } from './component/show-all/show-all.component';
import {FormsModule} from "@angular/forms";
// import { HouseComponent } from './service/house/house.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CreateHouseComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    ShowAllComponent,
    // HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
