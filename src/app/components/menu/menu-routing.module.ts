import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
// tslint:disable: max-line-length
// tslint:disable: quotemark

const routes: Routes = [
  { path: '', component: MenuComponent },
];

@NgModule({
  imports: [
            RouterModule.forChild(routes),
            ],
  exports: [RouterModule]
})

export class MenuRoutingModule { }
