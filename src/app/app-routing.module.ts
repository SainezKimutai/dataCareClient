import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-preload.module';
// tslint:disable: max-line-length
// tslint:disable: quotemark

const routes: Routes = [


];

@NgModule({
  imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader }),
            ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
