import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
// tslint:disable: max-line-length
// tslint:disable: quotemark

const routes: Routes = [

  { path: '', component: LoginComponent },


];

@NgModule({
  imports: [
            RouterModule.forChild(routes),
            ],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
