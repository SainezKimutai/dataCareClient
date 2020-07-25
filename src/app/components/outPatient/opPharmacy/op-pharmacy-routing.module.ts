import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpPharmacyComponent } from './op-pharmacy.component';


// tslint:disable: max-line-length
const routes: Routes = [

    { path: '', component: OpPharmacyComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpPharmacyRoutingModule { }


