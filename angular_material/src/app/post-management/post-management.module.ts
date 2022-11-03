import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostManagementComponent } from './post-management.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import { PostFormComponent } from './post-form/post-form.component'; 
import {MatCardModule} from '@angular/material/card'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PostRoutingModule } from './post-management-routing.module';
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [
    PostManagementComponent,
    PostListComponent,
    PostCardComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    BrowserModule,
    PostRoutingModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    PostManagementComponent,
    PostListComponent,
    PostCardComponent
  ]
})
export class PostManagementModule { }
