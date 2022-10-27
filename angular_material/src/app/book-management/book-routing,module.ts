import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const bookRoutes: Routes = [
    {path:'', component: BookListComponent},
    {path:'list', redirectTo: '/'},
    {path:'detail', component: BookDetailComponent},
    {path:'detail/:id', component: BookDetailComponent},
    {path:'**', component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forChild(bookRoutes)],
    exports: [RouterModule]
  })
  export class BookRoutingModule { }