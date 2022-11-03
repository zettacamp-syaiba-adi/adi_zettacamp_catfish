import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorManagementService } from '../../actor-management.service';
import { Actors } from '../../model/actors.model';
import { Movies } from '../../model/movies.model';
import { MovieManagementService } from '../../movie-management.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  selectedActor: Actors | null = null;
  id!: any | null;
  a: Movies[] = [];
  constructor(
    private actorService: ActorManagementService,
    private movieService: MovieManagementService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.BookManagementService.selectedBook$.subscribe((book) => {
    //   this.selectedBook = book;
    // })
    // this.movieService.selectedMovie$.subscribe((movie) => {
    //   this.selectedMovie = movie;
    // // })
    // this.route.paramMap.subscribe((params) =>{
    //   const id = parseInt(params.get('id')!, 10);
    //   this.selectedActor = this.actorService.getMovieById(id);
    // })

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.selectedActor = this.actorService.getMovieById(this.id);
    console.log(this.selectedActor)

    this.selectedActor.movies_id.forEach((movie) => {
      const movi = this.movieService.getMovieById(movie);
      // console.log(movi);

      this.a.push(movi)
    })
console.log(this.a);

  }
  closeDetail(){
    // this.BookManagementService.resetSelected();
    this.actorService.resetSelected();
  }

}
