import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
      LoginComponent
    ],
  imports: [
      CommonModule,
      LoginRoutingModule,
      FontAwesomeModule,
      ReactiveFormsModule,
      FormsModule,
    ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
