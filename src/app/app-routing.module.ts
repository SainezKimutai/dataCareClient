import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AppCustomPreloader } from './app-preload.module';
// tslint:disable: max-line-length
// tslint:disable: quotemark

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'src/app/components/home/home.module#HomeModule', data: {preload: true} },
  { path: 'login', loadChildren: 'src/app/components/login/login.module#LoginModule', data: {preload: true} },
  { path: '**', loadChildren: 'src/app/components/notFound/not-found.module#NotFoundModule', data: {preload: false}}
];

const routerOptions: ExtraOptions = {
  preloadingStrategy: AppCustomPreloader
};

@NgModule({
  imports: [
            RouterModule.forRoot(routes, routerOptions),
            ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
