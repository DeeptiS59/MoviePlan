import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router'
import { GenreService } from '../genre.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieId: String="";
  movie:any={genre:{}};
  genrelist:any={};
  constructor(private route: ActivatedRoute,private movieService: MovieService,private genreService: GenreService,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.movieId = params.get('id')||""
      this.movieService.getMovie(this.movieId).subscribe((res: any[]) => {
        this.movie = res;
        this.movie.genre=this.movie.genre||{};
      });
    })
    
    this.genreService.getGenres().subscribe((res: any[]) => {
      this.genrelist = res;
    });
    
       
    
  }
  onSubmit()
  {
    
    this.movieService.updateMovie(this.movieId,this.movie).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/admin/movie"])
    });
  }
}

