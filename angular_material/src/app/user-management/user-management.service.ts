import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/users.mode';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  constructor() { }

  getValueUser(): User[]{
    return this.users.getValue();
  }

  addUser(user: User){
    const users = this.getValueUser();
    users.push(user);

    this.users.next(users);
  }
}


