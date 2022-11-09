import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-table',
  templateUrl: './school-table.component.html',
  styleUrls: ['./school-table.component.css']
})
export class SchoolTableComponent implements OnInit {

  displayedColumns: string[] = ['short_name', 'long_name', 'status'];
  shcooles = [];

  dataSource = new MatTableDataSource();

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getSchool().subscribe((resp: any)=> {
      this.dataSource = resp.data.GetAllSchools;
      // console.log(resp);
    })
  }

}
