import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './includes/header/promise/promise.component';
import { ObservableComponent } from './includes/header/observable/observable.component';

export const routes: Routes = [
  {path: 'promise',component: PromiseComponent},
  {path: 'observable',component: ObservableComponent},
  {path: '**', component: PromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
