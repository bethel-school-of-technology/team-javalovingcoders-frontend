import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  myPostURL: string ="localhost:3000/profile"

  constructor(private http: HttpClient) { }


}
