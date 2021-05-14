import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  enteredTitle='';
  enteredContent='';
  @Output() postCreated = new EventEmitter();


  onAddPost() {
    const post =
    {
      title: this.enteredTitle,

      content: this.enteredContent
    };

    this.postCreated.emit(post);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
