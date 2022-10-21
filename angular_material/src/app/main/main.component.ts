import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input('srvElement') element!: { type: string; name: string; content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
