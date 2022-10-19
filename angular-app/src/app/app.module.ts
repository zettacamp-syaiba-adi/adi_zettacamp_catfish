import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MywebsiteModule } from './mywebsite/mywebsite.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MywebsiteModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
