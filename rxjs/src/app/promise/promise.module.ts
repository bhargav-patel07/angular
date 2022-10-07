import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromiseRoutingModule } from './promise-routing.module';
import { PromiseComponent } from './promise.component';
import { MyFunctionsComponent } from './my-functions/my-functions.component';


@NgModule({
  declarations: [
    PromiseComponent,
    MyFunctionsComponent
  ],
  imports: [
    CommonModule,
    PromiseRoutingModule
  ],
  exports:[
    MyFunctionsComponent
  ]
})
export class PromiseModule { }
