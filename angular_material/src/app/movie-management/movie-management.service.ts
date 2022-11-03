import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movies } from './model/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieManagementService {

  movies: BehaviorSubject<Movies[]> = new BehaviorSubject<Movies[]>([]);
  movies$ = this.movies.asObservable();

  

  selectedMovie: BehaviorSubject<Movies | null> = new BehaviorSubject<Movies | null>(null);
  selectedMovie$ = this.selectedMovie.asObservable();

  

  constructor(private http: HttpClient) {
    this.dummydata();
   }

   dummydata(){
    this.fetchJson().subscribe(resp =>{
      let movieData = resp.movies;
      this.setAllMovieList(movieData);
    })
   }

   fetchJson(){
    return this.http.get<any>('../assets/movies.json');
   }

   setAllMovieList(data: Movies[]){
    this.movies.next(data);
   }

   getValueAllMovieList():Movies[]{
    return this.movies.getValue();
  }

   setSelectedMovie(data: Movies){
    this.selectedMovie.next(data);
   }
   resetSelected(){
    this.selectedMovie.next(null);
  }

  getMovieById(id: number):Movies {
    return this.getValueAllMovieList().filter((item) => item.id == id)[0];
  }
}
