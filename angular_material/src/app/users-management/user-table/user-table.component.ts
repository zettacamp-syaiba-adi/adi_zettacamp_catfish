import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { MatTableDataSource } from '@angular/material/table';

const getUserFilter = gql`
query ($last_name:String){
  GetAllUsers(pagination: {page:0, limit: 15}){
    first_name
    last_name
    civility
  }
}`;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() filterName: any;
  users = [];

  selectedName:string = '';

  searchName = new FormGroup({
    namaakhir: new FormControl(null)
  })

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['civility','first_name','last_name'];

  isLoading: boolean = false;
  typingTimeout: any = null;
  constructor(private userService: UserService, 
    private apollo: Apollo) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((resp: any)=>{
      // this.users = resp.data.GetAllUsers;
      console.log(resp)
    })
  }

  searchByBrand(){
    this.apollo.watchQuery<any>({
       query: getUserFilter,
       variables:{
         last_name: this.selectedName
       }
     })
     .valueChanges
     .subscribe(({data, loading}) => {
       console.log(loading);
       this.users = data.query;
     });
   }

  search(search: string):any{
    if(search.length < 4 ){
       return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Type with 4 minimum word'
      });
    }
    this.isLoading = true;

    this.userService.getUserFilter(search).subscribe((resp: any) => {
      const data = resp.data.GetAllUsers;

      this.dataSource.data = data;
      this.isLoading = false
    })
  }

  onSearch(search:string){
      this.search(search);
  }

  searchOnType(search: string) {
    if (this.typingTimeout != null) {
          // clear timeout when user still typing
          clearTimeout(this.typingTimeout);
          this.typingTimeout = null;     
    }

    // execute .search() method when user idle for 4ms
    this.typingTimeout = setTimeout(() => {
          this.search(search);
    }, 400);
}
}