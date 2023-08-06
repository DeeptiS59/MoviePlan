import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public HttpClient: HttpClient) { }
  public getMovies():any{
    let url = "http://localhost:8080/movie";
    return this.HttpClient.get(url);
  }
  public saveMovie(movie:any):any{
    let url = "http://localhost:8080/movie";  
    return this.HttpClient.post(url,movie)
  }
  public deleteMovie(id:number):any{
    let url = "http://localhost:8080/movie/"+id;  
    return this.HttpClient.delete(url)
  }
  public getMovie(id:String):any{
    let url = "http://localhost:8080/movie/"+id;  
    return this.HttpClient.get(url)
  }
  public updateMovie(id:String,movie:any):any{
    let url = "http://localhost:8080/movie/"+id;  
    return this.HttpClient.patch(url,movie)
  }

}
