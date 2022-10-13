import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { ListComponent } from './list/list.component';
import { ObservableComponent } from './observable.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableComponent
  },
  {
    path: 'list',
    component: ListComponent,
    children: [
      {
        path: 'from-event',
        component: FromEventComponent
      },
      {
        path: 'interval',
        component:IntervalComponent
      }
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
