import { Component, OnInit } from '@angular/core';
import { Movies } from '../model/movies.model';
import { MovieManagementService } from '../movie-management.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  selectedMovie: Movies | null = null

  constructor(
    private movieService: MovieManagementService
  ) { }

  ngOnInit(): void {
    this.movieService.selectedMovie$.subscribe((movie) =>
    this.selectedMovie = movie)
  }

}
