import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
@Input() 
export class EmployeeDetailComponent implements OnInit {
  name: any;
  salary: any;
  gender: any;
  dob: any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.queryParams['name'];
    this.gender=this.activatedRoute.snapshot.queryParams['gender'];
    this.dob=this.activatedRoute.snapshot.queryParams['dob'];
    this.salary=this.activatedRoute.snapshot.queryParams['salary'];
    }

}
