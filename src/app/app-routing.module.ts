import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-preload.module';
// tslint:disable: max-line-length
// tslint:disable: quotemark

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'src/app/components/login/login.module#LoginModule' },


];

@NgModule({
  imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader }),
            ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
