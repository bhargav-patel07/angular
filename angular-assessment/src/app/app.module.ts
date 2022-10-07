import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './employee/employee.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserPipe } from './pipe/user.pipe';
import EmployeeServicesService from './services/employee-services.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    UserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EmployeeModule,
  HttpClientModule

    
  ],
  providers: [EmployeeServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
