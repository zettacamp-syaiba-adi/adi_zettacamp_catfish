import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/user.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  // userDatas:any;

  constructor(private httpClient: HttpClient) { 
    this.getData().subscribe((data)=>{
      this.users.next(data);
    // this.fetchDataJson().subscribe(resp => {
    //   this.userData = resp.users;
    //   this.setAllDataList(this.userData);
    // })
    });
  }

  // fetchDataJson(){
  //   return this.httpClient.get<any>('../../assets/users.json');
  // }

  // setAllDataList(data: User[]){
  //   this.users.next(data);
 // }

  getData(): Observable<any>{
    return this.httpClient.get('../../assets/users.json');
  }

  addUserToData(data: User){
    let tempUsers = this.getValuetAllUsersDatas();
    tempUsers.push(data);
    this.setAllUsersDatas(tempUsers);
    // this.userData.push(data);
    // this.users.next(this.userData);
  }

  getValuetAllUsersDatas(): User[] {
    return this.users.getValue();
  }

  setAllUsersDatas(data: User[]){
    this.users.next(data);
  }

  updateUser(user: any){
    const users:any = this.users.getValue().map((userDatas)=>{
      return userDatas.id === user.id ? user : userDatas;
    });
    this.users.next(users);
  }
}
