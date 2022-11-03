import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Movies } from '../../model/movies.model';
import { MovieManagementService } from '../../movie-management.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movieList: Movies[] = [];
  selectedMovie: Movies | null = null

  constructor(
    private movieService: MovieManagementService,
    private route:Router) { }

  ngOnInit(): void {
    this.movieService.movies$.subscribe(movies =>{
      this.movieList = movies;
    });
  }

  selectMovie(movie: Movies){
    // this.movieService.setSelectedMovie(data)
    this.route.navigate(['/detail/' + movie.id]);
  }



}
