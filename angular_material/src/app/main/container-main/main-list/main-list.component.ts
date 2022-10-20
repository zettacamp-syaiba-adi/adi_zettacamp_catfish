import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../models/data'
@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  data = new Data();
  clicked: boolean = true;
  

  constructor(){}
  ngOnInit(): void {
  }
  buttonclick():any{
    console.log(this.data)
  }
}
