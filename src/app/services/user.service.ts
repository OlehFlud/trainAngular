import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {configs} from "../config/config";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) {

  }

  // getPosts():Observable<any> {
  //   return this.http.get(`${configs.HOST}/createHouse`)
  // }
  registrationUser(userObject):Observable<any> {
    return this.http.post(`${configs.HOST}/user`,userObject)
  }
}
//    getSinglePost():Observable<any>{
//   return this.http.get(`${configs.HOST}/users/${id}`)
// }
