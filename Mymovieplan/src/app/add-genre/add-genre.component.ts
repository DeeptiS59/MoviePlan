import { Component } from '@angular/core';
import { GenreService } from '../genre.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent {

  genre:any={};
  constructor(private genreService: GenreService, private router: Router) { }
  
  
  onSubmit()
  {
    
    this.genreService.saveGenre(this.genre).subscribe((res: any[]) => {
       alert("done")
       this.router.navigate(["/admin/genre"])
    });
  }
  
  }
