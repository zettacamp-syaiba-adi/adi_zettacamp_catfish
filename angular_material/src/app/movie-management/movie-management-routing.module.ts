import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { DetailComponent } from './detail/detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const movieRoutes: Routes = [
    {path:'', component: MovieListComponent},
    {path:'movie', redirectTo: '/'},
    {path:'actor', component: ActorListComponent},
    {path:'about', component: AboutComponent},
    {path:'detail', component: DetailComponent},
    {path:'detail/:id', component: DetailComponent},
    {path:'detail/act/:id', component: DetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(movieRoutes)],
    exports: [RouterModule]
  })
  export class MovieRoutingModule { }