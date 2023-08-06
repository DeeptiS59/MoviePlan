import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public HttpClient: HttpClient) { }
  public registerUser(movie:any):any{
    let url = "http://localhost:8080/users";  
    return this.HttpClient.post(url,movie)
  }
  public login(movie:any):any{
    let url = "http://localhost:8080/userLogin";  
    return this.HttpClient.post(url,movie)
  } 
  public changePassword(resetpwd:any):any{
    let url = "http://localhost:8080/resetpwd";  
    return this.HttpClient.post(url,resetpwd) 
  }
}
