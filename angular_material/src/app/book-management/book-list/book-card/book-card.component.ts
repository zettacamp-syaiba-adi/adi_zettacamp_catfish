import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(
    private BookManagementService:BookManagementService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.BookManagementService.books$.subscribe(books => {
      this.bookList = books;
    })
  }


  selectBook(book: Book){
    this.route.navigate(['/detail/' + book.id]);
  }
}