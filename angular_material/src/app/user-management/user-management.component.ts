import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { AddUserComponent } from './add-user/add-user.component';
import { User } from './model/users.mode';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit{

  displayedColumns = ['civility', 'last_Name', 'first_Name','birthday','gender'];
  users: User[] = [];
  
  dataSource = new MatTableDataSource<User>();

  constructor(
    private ServiceUser: UserManagementService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.ServiceUser.users$.subscribe((users)=> {
      this.dataSource.data = users;
    })
  }

  openFileDialog(){
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(hasil=> {
      console.log(hasil)

      if(!hasil) return;

      this.ServiceUser.addUser(hasil);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your Data Has Been Insert',
      })
    })
  }
}
