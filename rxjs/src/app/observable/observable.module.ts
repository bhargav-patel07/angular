import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { ListComponent } from './list/list.component';
import { FromEventComponent } from './from-event/from-event.component';


@NgModule({
  declarations: [
    ObservableComponent,
    ListComponent,
    FromEventComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  exports:[
    ListComponent,
    FromEventComponent
  ]
})
export class ObservableModule { }
