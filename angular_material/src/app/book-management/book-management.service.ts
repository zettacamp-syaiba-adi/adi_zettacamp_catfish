import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Book } from './model/book.model';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class BookManagementService {

  books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  books$ = this.books.asObservable();

  selectedBook: BehaviorSubject<Book | null> = new BehaviorSubject<Book | null>(null);
  selectedBook$ = this.selectedBook.asObservable();

  constructor(
    private HttpClient: HttpClient
    ) { 
    this.dummyInitList();
  }

  dummyInitList(){
    this.fetchBookJson().subscribe(resp => {
      let bookData = resp.books;
      this.setAllBookLists(bookData);
    })
  }

  fetchBookJson(){
    return this.HttpClient.get<any>('assets/books.json');
  }

  setAllBookLists(data: Book[]){
    this.books.next(data);
  }

  addBookToList(data: Book){
    let TempBooks = this.getValueAllStudentList();
    TempBooks.push(data);
    this.setAllBookLists(TempBooks);
  }

  resetAllStudentList(){
    this.books.next([]);
  }

  getValueAllStudentList():Book[]{
    return this.books.getValue();
  }

  setSelectedBook(data: Book){
    this.selectedBook.next(data);
  }

  resetSelected():any{
    this.selectedBook.next(null);
  }

  getBookById(id: number):Book {
    return this.getValueAllStudentList().filter((item) => item.id == id)[0];
  }
}