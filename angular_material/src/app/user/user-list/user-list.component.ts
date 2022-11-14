import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { User } from 'src/app/model/users.mode';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() user:any;

  isLoading:boolean = true;

  displayedColumns: string[] = ['name', 'nickname', 'email', 'gender'];

  users: User[] = [];
  
  dataSources = new MatTableDataSource(this.users);

  apaya: boolean = true;
  constructor(private service: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.service.users$.subscribe((data) => {
      

      this.users = data;
      console.log(this.users);
      
      this.dataSources = new MatTableDataSource(this.users);
      // this.isLoading = false;
      setTimeout(()=>{
        this.isLoading = false;

      }, 2000)
    })
    
  }


  adi(){
    if(this.apaya){
      this.apaya = false
    }else{
      this.apaya = true
    }
  }
}
