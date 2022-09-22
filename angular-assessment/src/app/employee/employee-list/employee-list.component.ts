import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<[]>();
  @Input() employeeData: any;
  paginator: any;
  editCache: any;

  constructor() {
  }

  ngOnInit(): void {
  }
  removeAt(gopro: any) {
    this.employeeData.splice(gopro, 1);
  }
  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }
}