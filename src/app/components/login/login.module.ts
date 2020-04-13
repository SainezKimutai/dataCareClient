import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
      LoginComponent
    ],
  imports: [
      CommonModule,
      LoginRoutingModule
    ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
