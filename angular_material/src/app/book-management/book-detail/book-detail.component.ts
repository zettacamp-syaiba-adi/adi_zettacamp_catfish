import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookManagementService } from '../book-management.service';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  selectedBook: Book | null = null;
  bookID: any;

  constructor(
    private BookManagementService: BookManagementService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.BookManagementService.selectedBook$.subscribe((book) => {
    //   this.selectedBook = book;
    // })
    // this.selectedBook = this.route.snapshot.params['_id'];
    // this.BookManagementService.selectedBook$.subscribe(book => {
    //   this.selectedBook = book;
    // })
    this.route.paramMap.subscribe((params) =>{
      const id = parseInt(params.get('id')!, 10);
      this.selectedBook = this.BookManagementService.getBookById(id);
    })
  }
  // closeDetail(){
  //   this.BookManagementService.resetSelected();
  // }

}