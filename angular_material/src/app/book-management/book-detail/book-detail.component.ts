import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  selectedBook: Book | null = null;

  constructor(
    private BookManagementService: BookManagementService
    ) { }

  ngOnInit(): void {
    this.BookManagementService.selectedBook$.subscribe((book) => {
      this.selectedBook = book;
    })
  }
  closeDetail(){
    this.BookManagementService.resetSelected();
  }

}
