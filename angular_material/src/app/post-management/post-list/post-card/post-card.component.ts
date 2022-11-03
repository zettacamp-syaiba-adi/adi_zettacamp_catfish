import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post:any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onEditUser() {
    this.router.navigate(['/add'], {
      queryParams: { userId: this.post.id },
    });
  }
}
