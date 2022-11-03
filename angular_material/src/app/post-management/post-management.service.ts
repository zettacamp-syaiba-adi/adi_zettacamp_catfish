import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostManagementService {

  // private url = 'http://jsonplaceholder.typicode.com';

  posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable();


  constructor(private http: HttpClient) { 
    this.getPost().subscribe((data:any)=>{
      this.posts.next(data);
    });
  }

  addPostToData(data: Post){
    let tempPost = this.getValuetAllUsersDatas();
    tempPost.push(data);
    this.setAllUsersDatas(tempPost);
    // this.userData.push(data);
    // this.users.next(this.userData);
  }

  getValuetAllUsersDatas(): Post[] {
    return this.posts.getValue();
  }

  setAllUsersDatas(data: Post[]){
    this.posts.next(data);
  }

  getPost(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
  }

  addPost(postData:Post){
    this.http
    .post('http://jsonplaceholder.typicode.com/posts', postData).subscribe((data:any) => {
      console.log(data)
      this.addPostToData(data);
    });
  }
  
  patchPost(postData: Post){
    this.http.patch('http://jsonplaceholder.typicode.com/posts', postData).subscribe()
  }
}