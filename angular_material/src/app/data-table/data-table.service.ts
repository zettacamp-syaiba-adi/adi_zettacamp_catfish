import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mentor } from '../model/mentor.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  mentors: BehaviorSubject<Mentor[]> = new BehaviorSubject<Mentor[]>([]);
  mentors$ = this.mentors.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { 
    this.getData().subscribe((data) => {
      this.mentors.next(data);
    })
  }

  getData(){
    return this.httpClient.get<any>('../../assets/mentor.json');
  }

  getValuetAllMentorDatas(): Mentor[] {
    return this.mentors.getValue();
  }

  setAllMentorDatas(data: Mentor[]){
    this.mentors.next(data);
  }
}
