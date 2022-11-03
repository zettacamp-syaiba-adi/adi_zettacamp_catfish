import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieManagementComponent } from './movie-management.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorCardComponent } from './actor-list/actor-card/actor-card.component';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';

import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MovieRoutingModule } from './movie-management-routing.module';
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { DetailComponent } from './detail/detail.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { MovieDetailComponent } from './movie-list/movie-detail/movie-detail.component';
import { ActorDetailComponent } from './actor-list/actor-detail/actor-detail.component';
import { AboutComponent } from './about/about.component'; 

@NgModule({
  declarations: [
    MovieManagementComponent,
    MovieListComponent,
    ActorListComponent,
    ActorCardComponent,
    MovieCardComponent,
    DetailComponent,
    MovieDetailComponent,
    ActorDetailComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatIconModule,
    MatToolbarModule,
    MovieRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule
  ], 
  exports: [
    MovieManagementComponent,
    MovieListComponent,
    ActorListComponent,
    ActorCardComponent,
    MovieCardComponent
  ]
})
export class MovieManagementModule { }
