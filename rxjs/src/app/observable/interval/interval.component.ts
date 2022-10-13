import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  constructor() { }
  userSubscribtion: Subscription | any;
  watchData: any;
  ngOnInit(): void {
    const dataUser = interval(1000);

    this.userSubscribtion=dataUser.subscribe(res => {
      console.log(res);
      this.watchData = 'user' + res;
       if(res >=7){
        this.userSubscribtion.unsubscribe()
       }
    })
  }

}
