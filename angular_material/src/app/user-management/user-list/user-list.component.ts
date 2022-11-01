import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() filterName = '';
  users: User[] =[];

  filteredStatus = '';
  constructor(
    private router:Router,
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {
    this.userManagementService.users$.subscribe((data) => {
      this.users = data;
    });
  }

  addUser(){
    this.router.navigate(['add']);
  }

}
