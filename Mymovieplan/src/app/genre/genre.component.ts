import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genrelist: any;

  constructor(private genreService: GenreService) { }
  ngOnInit(): void {
    this.genreService.getGenres().subscribe((res: any[]) => {
      this.genrelist = res;
    });
  }
  deleteGenre(id:number) {
   this.genreService.deleteGenre(id).subscribe((res: any[]) => {
    this.genreService.getGenres().subscribe((res: any[]) => {
      this.genrelist = res;
    });
  });
  }
  
}
