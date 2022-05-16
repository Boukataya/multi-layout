import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NTExODMxOTUsImV4cCI6MTY1MTI2OTU5NX0.-DDDhaFg1IcL0wS9zjtCbLDVGmcw_dehyN_C5ExfjEQ`
    })
  };


  getAllPosts() {
    return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
}
