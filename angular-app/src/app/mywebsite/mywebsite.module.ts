import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { ListComponent } from './main/list/list.component';

@NgModule({
  declarations: [
    HeadComponent,
    MainComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadComponent,
    MainComponent
  ]
})
export class MywebsiteModule { }
