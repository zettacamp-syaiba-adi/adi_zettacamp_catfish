import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PostManagementService } from '../post-management.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any;
  constructor(
    private http: HttpClient,
    private postmanagement: PostManagementService
  ){}

  ngOnInit(): void {
    this.postmanagement.posts$.subscribe((data) => {
      this.posts = data;
    })
  }
}
