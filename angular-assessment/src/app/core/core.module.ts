import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
HeaderComponent,
ContactComponent
  ]
})
export class CoreModule { }
