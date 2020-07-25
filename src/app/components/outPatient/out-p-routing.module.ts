import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutPatientComponent } from './out-p.component';


// tslint:disable: max-line-length
const routes: Routes = [

    { path: '', component: OutPatientComponent,
      children: [
        { path: '', redirectTo: 'reception', pathMatch: 'full' },
        { path: 'reception', loadChildren: 'src/app/components/outPatient/opReception/op-reception.module#OpReceptionModule', data: {preload: true}},
        { path: 'examination', loadChildren: 'src/app/components/outPatient/opExam/op-exam.module#OpExamModule', data: {preload: true}},
        { path: 'lab', loadChildren: 'src/app/components/outPatient/opLab/op-lab.module#OpLabModule', data: {preload: true}},
        { path: 'x-ray', loadChildren: 'src/app/components/outPatient/opXray/op-xray.module#OpXrayModule', data: {preload: true}},
        { path: 'pharmacy', loadChildren: 'src/app/components/outPatient/opPharmacy/op-pharmacy.module#OpPharmacyModule', data: {preload: true}},
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutPatientRoutingModule { }









