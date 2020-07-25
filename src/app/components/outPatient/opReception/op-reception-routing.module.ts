import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpReceptionComponent } from './op-reception.component';


// tslint:disable: max-line-length
const routes: Routes = [

    { path: '', component: OpReceptionComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpReceptionRoutingModule { }


