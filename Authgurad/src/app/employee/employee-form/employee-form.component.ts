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


  public isSubmitted: boolean = false;
  public title: string;
  public employeeForm: FormGroup;

  // Profile
  public displayprofile!:File;
  public profilepath:string
  public id: any;
  public imageString: any;

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

    this.route.data.subscribe((data) =>{
    this.employeeForm.patchValue(data['Employee']);
    this.imageString = this.employeeForm.get('profilepath')?.value
    });
this.profilepath="";
this.imageString = '';
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
        this.employeeForm.controls['profilepath'].setValue(this.imageString)
        this.employeeService.addEmployee(this.employeeForm.value).subscribe((response) => {
          this.getEmployee();
        });
        this.employeeForm.reset();
      }
    this.router.navigate(['employee/list']);
      this.onReset();
    }
  }

  public updateEmployee(): void {
    this.employeeForm.controls['profilepath'].setValue(this.imageString)
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
/**
 * validators
 */
  private employeeFormBuilder(): FormGroup {
    return this.employeeForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      profile:['',Validators.required],
      profilepath:[''],
      id: [],

    })
  }
  /**
   * getEmployee
   */
  private getEmployee(): void {
    
    this.employeeService.getEmployee().subscribe((employee: Employee[]) => {
      this.employeeData = employee;
    })

   

  }
  
/**
 *  imageUplode
 */
  public imageUploaded(event: any) {
    this.displayprofile = event.target.files[0];
    console.log(this.displayprofile)
    const reader = new FileReader();
    reader.readAsDataURL(this.displayprofile);
    reader.onload = () => {
      this.imageString = reader.result;
      console.log(this.imageString)
    }
  }
}
