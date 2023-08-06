import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {


  movielist: any;

  constructor(private movieService: MovieService, private router:Router) { }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((res: any[]) => {
      this.movielist = res;
    });
  }
  deleteMovie(id:number) {
   this.movieService.deleteMovie(id).subscribe((res: any[]) => {
    this.movieService.getMovies().subscribe((res: any[]) => {
      this.movielist = res;
    });
  });
  }
  

}

