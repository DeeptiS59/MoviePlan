import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { GenreService } from '../genre.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  movielist: any[]=[];
  genrelist: any[]=[];  
  displayedMovielist:any[]=[];
  genreFilter:number=-1;
  shouldFilter:boolean=false;
  searchTerm: String="";
  sort:String="";
  constructor(private movieService: MovieService, private genreService: GenreService, private cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    
    this.movieService.getMovies().subscribe((res: any[]) => {
      this.movielist = res;
      this.computeDisplayedMovielist();
    });
    this.genreService.getGenres().subscribe((res: any[]) => {
      this.genrelist = res;
    });
  }
  addToCart(movieId:String) {
    let x:String=localStorage.getItem("userId")||""
   this.cartService.addCartItem(x,movieId).subscribe((res: any[]) => {
    alert("done")
 });
  }
  onSearch(event: any) {
    this.searchTerm=event?.target?.value;
    this.computeDisplayedMovielist();
  }
  clearFilter() {
    this.shouldFilter=false;
    this.computeDisplayedMovielist();    
  }
  genreFilters(genreId:number) {
    this.shouldFilter=true;
    this.genreFilter=genreId;
    this.computeDisplayedMovielist();
  }
  sortMovies(event:any) { 
    this.sort=event.target?.value;
    this.computeDisplayedMovielist();
  }
  computeDisplayedMovielist() {
    this.displayedMovielist=this.movielist.filter(item=>item.enable);
    if(this.searchTerm) {
      this.displayedMovielist=this.displayedMovielist.filter(item=>item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1)
    }
    
    if(this.shouldFilter){
      this.displayedMovielist=this.displayedMovielist.filter(item=>item.genre?.id==this.genreFilter)
    }
    if(this.sort== "asc"){
      this.displayedMovielist=this.displayedMovielist.concat().sort((a,b)=>a.price-b.price);  
    }
    else if(this.sort=="desc") {
      this.displayedMovielist=this.displayedMovielist.concat().sort((a,b)=>b.price-a.price);  
    }

  }
}
