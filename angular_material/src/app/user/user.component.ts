import { Component, OnInit } from '@angular/core';
import { User } from '../model/users.mode';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private Service: UserService) { }
  users: User[] = [];
  ngOnInit(): void {
      this.Service.users$.subscribe((data)=>{
        // this.users = data;

        console.log(data)
      })
  }

}
