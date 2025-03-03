import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routes} from '../app/app-routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header/header.component';
import { PromiseComponent } from './includes/header/promise/promise.component';
import { ObservableComponent } from './includes/header/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent
  ],
  imports: [
   //here for instance add it
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
