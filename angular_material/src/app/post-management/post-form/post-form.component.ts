import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PostManagementService } from '../post-management.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm = new FormGroup({
    userId: new FormControl(null),
    id: new FormControl(null),
    title: new FormControl(null),
    body: new FormControl(null)
  })

  isEdit: boolean = false;

  constructor(
    private postService: PostManagementService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   this.postService.addPerson(this.postForm.value)
  // }

  onAddPost(data: any){
    this.postService.addPost(data);
    this.router.navigate(['/list'])
  }
}
