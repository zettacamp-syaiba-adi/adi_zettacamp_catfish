import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actors } from './model/actors.model';

@Injectable({
  providedIn: 'root'
})
export class ActorManagementService {

  actors: BehaviorSubject<Actors[]> = new BehaviorSubject<Actors[]>([]);
  actors$ = this.actors.asObservable(); 

  selectedActor: BehaviorSubject<Actors | null> = new BehaviorSubject<Actors | null>(null);
  selectedActor$ = this.selectedActor.asObservable();
  
  constructor(private http: HttpClient) {
    this.dummydataActor();
   }

   dummydataActor(){
    this.fetchJson().subscribe(resp =>{
      let actorData = resp.actors;
      this.setAllActorList(actorData);
    })
   }

   fetchJson(){
    return this.http.get<any>('../assets/actors.json');
   }

   setAllActorList(data: Actors[]){
    this.actors.next(data);
   }

   getValueAllActorList():Actors[]{
    return this.actors.getValue();
  }

   setSelectedActor(data: Actors){
    this.selectedActor.next(data);
   }
   resetSelected(){
    this.selectedActor.next(null);
  }
  
  getMovieById(id: number):Actors {
    return this.getValueAllActorList().filter((item) => item.id == id)[0];
  }
}
