import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/users.mode';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();
  
  constructor() { }
}
