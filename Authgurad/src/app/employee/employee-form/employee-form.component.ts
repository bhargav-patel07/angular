import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public employeeData: Employee[];
  // public employeeData$: Observable<Employee[]>;

  public isSubmitted: boolean = false;
  public title: string;
  public employeeForm: FormGroup;

  // public empname: string

  public id: any;
  constructor(
    public formbuilder: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.title = 'Add';
    this.employeeData = [];
    this.employeeForm = this.employeeFormBuilder();

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getEmployeeById()
    });

  }


  ngOnInit(): void {
    this.getEmployee();
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    if (this.employeeForm.valid) {
      this.isSubmitted = false;
      if (this.id) {
        this.updateEmployee()
      }
      else {

        this.employeeService.addEmployee(this.employeeForm.value).subscribe((response) => {
          this.getEmployee();
        });

        this.employeeForm.reset();
        // console.log(this.employeeData);
      }
    this.router.navigate(['employee/list']);
      this.onReset();
    }
  }

  public updateEmployee(): void {
    this.employeeService.updateEmployee(this.employeeForm.value, this.id).subscribe((response) => {
      this.getEmployee();
    });
  }

  public onReset(): void {
    this.employeeForm.reset();
  }

  EditEmployee(data: Employee) {
    this.employeeForm.patchValue(data);
    this.title = "Edit";
  }

  private getEmployeeById(): void {
    this.employeeService.getEmployeeById(this.id).subscribe((employee: Employee) => {
      this.employeeForm.patchValue(employee);
    });
  }

  private employeeFormBuilder(): FormGroup {
    return this.employeeForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      id: [],
    })
  }
  /**
   * getEmployee
   */
  private getEmployee(): void {
    // this.employeeService.getEmployee().subscribe((employee: Employee[]) => {
    //   console.log(employee);
    // });
    this.employeeService.getEmployee().subscribe((employee: Employee[]) => {
      this.employeeData = employee;
    })

    // this.employeeData$ = this.employeeService.getEmployee();

  }
  // /** Destroy the subscriber */
  // public ngOnDestroy(): void {
  //   this.destroy.next(true);
  //   this.destroy.complete();
  // }
}
