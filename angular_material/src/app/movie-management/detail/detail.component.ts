import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from '../model/movies.model';
import { MovieManagementService } from '../movie-management.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selectedMovie: Movies | null = null;
  bookID: any;

  constructor(
    private movieService: MovieManagementService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      const id = parseInt(params.get('id')!, 10);
      this.selectedMovie = this.movieService.getMovieById(id);
    })
  }

}
