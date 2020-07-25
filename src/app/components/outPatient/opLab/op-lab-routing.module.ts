import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpLabComponent } from './op-lab.component';


// tslint:disable: max-line-length
const routes: Routes = [

    { path: '', component: OpLabComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpLabRoutingModule { }


