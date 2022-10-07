import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild('addBtn')
  public addBtn!: ElementRef<any>;

  ngAfterViewInit(): void {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      console.log(res)
    })
  }

  ngOnInit(): void {

  }
}
