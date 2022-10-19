import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() films: any;
  constructor() { }
  clicked:boolean = true;

  ngOnInit(): void {
  }

  buttonclick():any{
    this.clicked = !this.clicked;
  }

  getcolor(){
    return this.clicked === true ? 'red': 'green'
  }

}
