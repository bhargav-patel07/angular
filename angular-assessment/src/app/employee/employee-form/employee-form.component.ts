import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'
import EmployeeServicesService from 'src/app/services/employee-services.service';
import { posts } from '../user.model';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public employeeData: posts[];
  public items: any;

  constructor(private employeeservice: EmployeeServicesService) {
    this.employeeData = [];
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      dob: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
    this.employeeData;
  }

  ngOnInit(): void {
    this.getEmployeeData()
  }
  get fun(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  public reset(): void {
    this.employeeForm.reset();
  }

  public save() {
    if (this.employeeForm.valid) {
      this.employeeData.push(this.employeeForm.value);
      this.employeeservice.onPost(this.employeeForm.value).subscribe((result) => {
        this.getEmployeeData();
      })
    }
    this.employeeForm.reset();
  }
  addItem(value: any) {

    this.employeeForm.patchValue(value);
  }
  // get data
  public getEmployeeData(): void {
    this.employeeservice.getEmployee().subscribe((user: posts[]) => {
      this.employeeData = user;
    })
  }
  public getEmpId(){
    this.employeeservice.getEmpId(this.items).subscribe((kuchbhi)=>{
      console.log(kuchbhi)
    })
  }
 
}


