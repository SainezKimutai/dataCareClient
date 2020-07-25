import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpExamComponent } from './op-exam.component';


// tslint:disable: max-line-length
const routes: Routes = [

    { path: '', component: OpExamComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpExamRoutingModule { }


