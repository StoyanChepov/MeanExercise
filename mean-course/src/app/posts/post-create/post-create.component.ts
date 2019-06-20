import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  // enteredValue = 'Enter something...';
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  newPost = '';

onAddPost(postInput: HTMLTextAreaElement) {
  alert('Post added!');
   // this.newPost = 'The user post is added';
   // this.newPost = postInput.value;
  // this.newPost = this.enteredValue;

  const post: Post= {
    title: this.enteredTitle,
    content: this.enteredContent
  };
  this.postCreated.emit(post);

}

  constructor() { }

  ngOnInit() {
  }

}
