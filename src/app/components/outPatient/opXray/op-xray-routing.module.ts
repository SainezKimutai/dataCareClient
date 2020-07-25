import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpXrayComponent } from './op-xray.component';


// tslint:disable: max-line-length
const routes: Routes = [

    { path: '', component: OpXrayComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpXrayRoutingModule { }


