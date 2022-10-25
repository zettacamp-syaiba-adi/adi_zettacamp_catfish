import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookManagementComponent } from './book-management.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardComponent } from './book-list/book-card/book-card.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    BookManagementComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ],

  exports: [BookManagementComponent]
})
export class BookManagementModule { }
