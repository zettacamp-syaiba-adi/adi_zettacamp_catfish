import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/users.mode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  private readonly URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { 
    this.getData().subscribe((data:any) => {
      this.users.next(data);
    })
  }

  getData(){
    const url = this.URL + 'users/';
    return this.http.get<User[]>(url);
  }

  addUsertoData(data: User){
    let tempUser = this.getValueAllUserData();
    tempUser.push(data);

    this.setAllUserData(tempUser);
  }

  getValueAllUserData():User[]{
    return this.users.getValue();
  }

  setAllUserData(data: User[]){
    this.users.next(data);
  }

  addUser(postUser: User){
    this.http.post('http://localhost:3000/users', postUser).subscribe((data:any) =>{
      console.log(data);
      this.addUsertoData(data)
      
    })
  }
  patchUser(postUser: User){
    this.http.patch('http://jsonplaceholder.typicode.com/posts', postUser).subscribe()
  }
}
