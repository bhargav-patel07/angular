import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './observable/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'async-await',
    component: AsyncAwaitComponent
  },
  { path: 'observable', loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule) },
  { path: 'promise', loadChildren: () => import('./promise/promise.module').then(m => m.PromiseModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
