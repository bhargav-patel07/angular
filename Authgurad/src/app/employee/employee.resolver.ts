import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.model';
import { EmployeeService } from './service/employee.service';

@Injectable()
export class EmployeeResolver implements Resolve<Employee[]> {
  constructor(private employeeService: EmployeeService) { }
  resolve(): Observable<Employee[]> {
    // const employeeList: Employee[] = [];
   return this.employeeService.getEmployee();
  }
}
