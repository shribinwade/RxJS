import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './includes/header/promise/promise.component';
import { ObservableComponent } from './includes/header/observable/observable.component';
import { ListComponent } from './includes/header/observable/list/list.component';
import { FromEventComponent } from './includes/header/observable/from-event/from-event.component';

export const routes: Routes = [
  {path: 'promise',component: PromiseComponent},
  {path: 'observable',component: ObservableComponent,
    children:[
      {path:'list',component: ListComponent},
      {
        path:'formEvent', component: FromEventComponent
      }
    ]
  },
  {path: '**', component: PromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
