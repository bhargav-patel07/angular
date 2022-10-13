import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DataService } from 'src/app/servises/data.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(private serviseData:DataService) { }
  @ViewChild('addBtn')
  public addBtn!: ElementRef<any>;

 

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal='one ' + count++
      console.log(countVal );
      this.serviseData.print(countVal,'users');
      this.serviseData.print(countVal,'users1');
    })
  }
}
