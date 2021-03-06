import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

//I think I might need this profile route so that I can add the posts to the profile. Stay tuned.
//import { Profile } from "../models/profile"

@Injectable({providedIn: 'root'})
export class PostService {

  myPostURL: string ="http://localhost:3001/posts"

  constructor(private http: HttpClient) { }

  //we need a way to get all posts (READ)
  getAllPost(): Observable<any> {
    return this.http.get<any>(this.myPostURL)
  }

  //This will get one of the posts the user has created (gotten by id)
  //Component needs an ID
  getOnePost(reqID: number): Observable<Post> {
    return this.http.get<Post>(`${this.myPostURL}/${reqID}`)
  }

  //We need a way to update the post information (UPDATE)
  updatePost(editID: number, edditedInfo: Post): Observable<Post> {
    return this.http.put<Post>(`${this.myPostURL}/update`,edditedInfo, {headers: {
      Authorization: localStorage.getItem("myAppToken")
    }})

  }

  //we need a way to delete the posts (DELETE)
  deletePost(PostId): Observable<any> {
    return this.http.post<any>(`${this.myPostURL}/delete`, {PostId},{headers: {
      Authorization: localStorage.getItem("myAppToken")
    }});
  }

  //We need a way to create a new post (CREATE)
  //Component needs to provide the new post information.

  createPost(newPost: Post): Observable<any>{
    let myHeaders = {
      Authorization: localStorage.getItem("myAppToken")
    }
    return this.http.post<any>(this.myPostURL+"/createPost", newPost, {headers: {
      Authorization: localStorage.getItem("myAppToken")
    }});
  }

  // deletePost(postId: string) {
  //   this.http.delete("http://localhost:3001/posts/" + postId)
  //   .subscribe(() => {
  //     console.log('Deleted!');
  //   })
  // }


}



