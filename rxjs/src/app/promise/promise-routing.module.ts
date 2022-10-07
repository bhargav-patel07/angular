import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFunctionsComponent } from './my-functions/my-functions.component';
import { PromiseComponent } from './promise.component';

const routes: Routes = [{ path: '', component: PromiseComponent },
{
  path:'my-functions',
  component:MyFunctionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromiseRoutingModule { }
