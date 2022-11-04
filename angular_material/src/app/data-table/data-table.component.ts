import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Mentor } from '../model/mentor.model';
import { DataTableService } from './data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'user_type', 'email', 'status'];

  mentors: Mentor[] = [];

  dataSources = new MatTableDataSource(this.mentors);

  nameFilter = new FormControl();
  userFilter = new FormControl();
  emailFilter = new FormControl();
  status = new FormControl();

  statususer = ['active', 'pending'];

  filteredValues = { name:'', user_type:'', email:'', status:''};

  constructor(
    private dtTable: DataTableService
  ) {
  }

  ngOnInit(): void {
      this.dtTable.mentors$.subscribe((data) => {
      this.mentors = data
      console.log(data);

      this.dataSources = new MatTableDataSource(this.mentors)
  
      this.nameFilter.valueChanges.subscribe((nameFilterValue)=> {
        this.filteredValues['name'] = nameFilterValue;
        this.dataSources.filter = JSON.stringify(this.filteredValues);
      });
      
      this.userFilter.valueChanges.subscribe((userFilterValue)=> {
        this.filteredValues['user_type'] = userFilterValue;
        this.dataSources.filter = JSON.stringify(this.filteredValues);
      });
      
      this.emailFilter.valueChanges.subscribe((emailFilterValue)=> {
          this.filteredValues['email'] = emailFilterValue;
          this.dataSources.filter = JSON.stringify(this.filteredValues);
      });

      this.status.valueChanges.subscribe((statusFilterValue)=> {
        this.filteredValues['status'] = statusFilterValue;
        this.dataSources.filter = JSON.stringify(this.filteredValues);
      });
          this.dataSources.filterPredicate = this.customFilterPredicate();

    // this.dtTable.mentors$.subscribe((data) => {
    //   this.mentors = data
    //   console.log(data);

    //   this.dataSources = new MatTableDataSource(this.mentors)

    //   // this.dataSources.filterPredicate = function(record, filter){
    //   //   let map = new Map(JSON.parse(filter));
    //   //   let isMatch = false;
    //   //   for(let [key,value] of map){
    //   //     isMatch = (value == "All") || (record [key as keyof Mentor] == value);
    //   //     if(!isMatch) return false
    //   //   }
    //   //   return isMatch;
    //   // }
    // }) 
    })

  }
  customFilterPredicate() {
    const myFilterPredicate = function(data: Mentor, filter:string) :boolean {
      let searchString = JSON.parse(filter);
      let nameFound = data.last_name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1
      let user_typeFound = data.company.user_type.toString().trim().indexOf(searchString.user_type) !== -1
      let emailFound = data.email.toString().trim().indexOf(searchString.email) !== -1
      let statusFound = data.user_status.toString().trim().indexOf(searchString.status) !== -1
      if (searchString.topFilter) {
          return nameFound || emailFound || user_typeFound  ||statusFound
      } else {
          return nameFound && emailFound && user_typeFound && statusFound
      }
    }
    return myFilterPredicate;
  }
  // applyFilter(event: Event){
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSources.filter = filterValue.trim().toLowerCase();
  // }


}
