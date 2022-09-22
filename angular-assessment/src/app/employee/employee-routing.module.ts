import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [

  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employee-form'
      },
      {
        path: 'employee-form',
        component: EmployeeFormComponent
      },
      {
        path: 'employee-detail',
        component: EmployeeDetailComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
