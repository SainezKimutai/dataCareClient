import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppCustomPreloader } from './app-preload.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
// tslint:disable: max-line-length
// tslint:disable: quotemark

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'src/app/components/home/home.module#HomeModule', data: {preload: true} },
  { path: 'login', loadChildren: 'src/app/components/login/login.module#LoginModule', data: {preload: true} },
  { path: '**', loadChildren: 'src/app/components/notFound/not-found.module#NotFoundModule', data: {preload: false}}
];

@NgModule({
  imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader }),
            ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
