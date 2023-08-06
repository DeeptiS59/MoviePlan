import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { GenreService } from '../genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  movie:any={genre:{}};
  genrelist:any={};
  constructor(private movieService: MovieService,private genreService: GenreService, private router:Router) { }
  ngOnInit(): void {
    this.genreService.getGenres().subscribe((res: any[]) => {
      this.genrelist = res;
    });
   
    
  }
  onSubmit()
  {
    
    this.movieService.saveMovie(this.movie).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/admin/movie"])
    });
  }

}

