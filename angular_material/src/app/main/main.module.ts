import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContainerHeadComponent } from './container-head/container-head.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { MainListComponent } from './container-main/main-list/main-list.component';



@NgModule({
  declarations: [
    MainListComponent,
    ContainerHeadComponent,
    ContainerMainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainListComponent,
    ContainerHeadComponent,
    ContainerMainComponent,
  ]
})
export class MainModule { }
