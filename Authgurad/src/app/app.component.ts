import { Component, OnInit} from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isMenu: boolean;
  title = 'AUTHGUARD';

  constructor(
    private authService: AuthService
  ) {
    this.isMenu = false;
  }
  ngOnInit(): void {
   
  }

  ngAfterContentChecked():void{
    this.authService.userIsLoginObservable$.subscribe((res) => {
      this.isMenu = res
    })
  }
}

