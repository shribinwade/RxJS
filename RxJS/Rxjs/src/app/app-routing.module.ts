import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './includes/header/promise/promise.component';

export const routes: Routes = [
  {path: 'promise',component: PromiseComponent},
  {path: '**', component: PromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
