import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const userRoutes: Routes = [
    {path:'', component: UserListComponent},
    {path:'list', redirectTo: '/'},
    {path: 'add', component: UserAddComponent},
    {path:'detail', component: UserDetailComponent},
    {path:'detail/:id', component: UserDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {
    
}