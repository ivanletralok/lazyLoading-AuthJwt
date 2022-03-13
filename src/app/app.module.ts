import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './pages/product/edit/edit.component';
import { ReadComponent } from './pages/product/read/read.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ReadComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
