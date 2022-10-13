import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { ListComponent } from './list/list.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { DataService } from '../servises/data.service';


@NgModule({
  declarations: [
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  exports: [
    ListComponent,
    FromEventComponent
  ],
  providers: [DataService]
})
export class ObservableModule { }
