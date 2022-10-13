import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import EmployeeServicesService from 'src/app/services/employee-services.service';
import { posts } from '../user.model';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  [x: string]: any;
  public employeeForm: FormGroup;
  public employeeData: posts[];
  public items: any;
  public id:any;

  constructor(private employeeservice: EmployeeServicesService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>
    {
      this.id = params['id'];
      this.getEmployeeData();
    })
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


  public save() {5
    if (this.employeeForm.valid) {
      // this.employeeData.push(this.employeeForm.value);
     if (this.id){
      this.updateEmployee();
     }
     else{
      this.employeeservice.onPost(this.employeeForm.value).subscribe((result) => {
        this.getEmployeeData();
        console.log(result)
      })
     }
     this.getEmployeeData()
    }
    this.employeeForm.reset();
  }
 
  
  public reset(): void {
    this.employeeForm.reset();
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
 
  // getEditData(){
  //   this.employeeservice.getEmpId(this.id).subscribe((data)=>
  //   {
  //     this.employeeForm.patchValue(data);
  //   })
  // }

  // updateemployee
 public updateEmployee() : void{
    this.employeeservice.updateEmployee(this.employeeForm.value,this.id).subscribe((response:posts) => {
    this.getEmployeeData()
    });
  }
  
  addItem(value: posts) {
    this.employeeForm.patchValue(value);
  }
}


