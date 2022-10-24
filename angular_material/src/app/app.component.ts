import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  
  title: any;

  datas: {name:string, status:string}[] = [];

  constructor(private dataService: DataService){}
  ngOnInit() {
    this.datas = this.dataService.datas;
  }
  
}
