import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editPost: Post = new Post()

  PostID: number;

  constructor(private actRoute: ActivatedRoute, private myPostService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.PostID = parseInt(this.actRoute.snapshot.paramMap.get("PostId"));
    console.log(this.PostID);

    //Fetch the contact corresponding to the id 
    this.myPostService.getOnePost(this.PostID).subscribe(response =>{
      this.editPost = response;
      console.log(response);
      
    })
  }

  updatePost(){
    this.myPostService.updatePost(this.PostID, this.editPost).subscribe(response =>{
      console.log(response);
      this.router.navigate(["profile"])
    })
  }

  refresh(): void {
    window.location.reload();
  }

}
