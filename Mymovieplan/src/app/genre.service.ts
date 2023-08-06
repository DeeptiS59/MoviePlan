import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(public HttpClient: HttpClient) { }
  public getGenres():any{
    let url = "http://localhost:8080/genre";
    return this.HttpClient.get(url);
  }
  public saveGenre(genre:any):any{
    let url = "http://localhost:8080/genre";  
    return this.HttpClient.post(url,genre)
  }
  public deleteGenre(id:number):any{
    let url = "http://localhost:8080/genre/"+id;  
    return this.HttpClient.delete(url)
  }

}
