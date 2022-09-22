import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public employeeData: any;
  public items: any;

  constructor() {
    this.employeeData = [];
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      gender: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      dob: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    })
  }

  ngOnInit(): void {

  }
  get fun(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  public reset(): void {
    this.employeeForm.reset();
  }

  public save() {
    if(this.employeeForm.valid){
    this.employeeData.push(this.employeeForm.value);
    }
    this.employeeForm.reset();
  }
  addItem(value: any) {
  
    this.employeeForm.patchValue(value);
  }
}


