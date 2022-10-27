import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  selectedBook: Book | null = null

  constructor(
    private BookManagementService: BookManagementService
  ) { }

  ngOnInit(): void {
    this.BookManagementService.selectedBook$.subscribe((book) =>
    this.selectedBook = book);
  }

}