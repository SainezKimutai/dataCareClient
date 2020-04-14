import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';



@NgModule({
  declarations: [
      MenuComponent
    ],
  imports: [
      CommonModule,
      MenuRoutingModule,
      FontAwesomeModule,
      ReactiveFormsModule,
      FormsModule,
    ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
