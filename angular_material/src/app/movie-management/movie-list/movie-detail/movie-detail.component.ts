import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../model/movies.model';
import { MovieManagementService } from '../../movie-management.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: Movies | null = null;

  constructor(
    private movieService: MovieManagementService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.BookManagementService.selectedBook$.subscribe((book) => {
    //   this.selectedBook = book;
    // })
    // this.movieService.selectedMovie$.subscribe((movie) => {
    //   this.selectedMovie = movie;
    // })
    this.route.paramMap.subscribe((params) =>{
      const id = parseInt(params.get('id')!, 10);
      this.selectedMovie = this.movieService.getMovieById(id);
    })
  }
  closeDetail(){
    // this.BookManagementService.resetSelected();
    this.movieService.resetSelected();
  }
}
