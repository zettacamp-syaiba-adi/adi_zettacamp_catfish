import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', redirectTo: '/'},
  {path:'user-list', component: UserListComponent},
  {path:'user-add', component: UserAddComponent},
  //   {path:'detail', component: DetailComponent},
  //   {path:'detail/:id', component: DetailComponent},
  //   {path:'detail/act/:id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

