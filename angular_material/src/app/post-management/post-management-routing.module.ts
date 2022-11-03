import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

const postRoutes: Routes = [
    {path:'', component: PostListComponent},
    {path:'list', redirectTo: '/'},
    {path: 'add', component: PostFormComponent},
];

@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
  })
  export class PostRoutingModule {
    
}