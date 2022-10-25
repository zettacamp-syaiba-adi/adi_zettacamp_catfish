import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../../book-management.service';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  bookList: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private BookManagementService:BookManagementService) { }

  ngOnInit(): void {
    this.BookManagementService.books$.subscribe(books => {
      this.bookList = books;
    })
  }

  selectBook(book: Book){
    this.BookManagementService.setSelectedBook(book);
  }

}
