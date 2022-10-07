import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import EmployeeServicesService from 'src/app/services/employee-services.service';
import { posts } from '../user.model';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<[]>();
  @Input() employeeData: posts[];
  paginator: any;
  editCache: any;
  employeeForm: any;
  
  
  
 

  constructor(private employeeService:EmployeeServicesService, private router: Router, public activatedRoute: ActivatedRoute) {
    this.employeeData=[];
    this.newItemEvent= new EventEmitter
    
  }

  ngOnInit(): void {
  }
  removeAt(id:any) {
    
    this.employeeService.removeAt(id).subscribe((result)=>{
      this.getEmployeeData();
    });
   
    
  }

  public getEmployeeData(): void {
    this.employeeService.getEmployee().subscribe((user: posts[]) => {
      this.employeeData = user;
    })
  }

  public addNewItem(items:any): void {
   this.employeeForm.patchValue(items)
  }

}