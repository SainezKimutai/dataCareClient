import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocketComponent } from './docket.component';


// tslint:disable: max-line-length
const routes: Routes = [

    { path: '', component: DocketComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocketRoutingModule { }










