import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/servers/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieServie : MovieService) { }
  moviesList:[]=[]
  movieRequestedFromSearchComponent:string=""

  MPMovie:Movie={
    movie:this.movieRequestedFromSearchComponent,
    MPAPExist:true,
    MPRVExist:true,
    MPCExist:true
  }

  ngOnInit(): void {
    this.getAllMoviesList();
  }


  getAllMoviesList(){

      this.movieServie.getAllMoviesList().subscribe((moviesList:any)=>{
        this.moviesList=moviesList
      })
  }

  movieSearchItem(searchItem:any)
  {
    this.movieRequestedFromSearchComponent=searchItem;
    this.movieServie.getMPMovieBasedOnMovieSearchItem(this.movieRequestedFromSearchComponent).subscribe(((MPMovieRes) => {
          console.log(MPMovieRes)
          this.MPMovie.movie=MPMovieRes.movie;
          this.MPMovie.MPAPExist=MPMovieRes.MPAPExist;
          this.MPMovie.MPCExist=MPMovieRes.MPCExist;
          this.MPMovie.MPRVExist=MPMovieRes.MPRVExist;
          console.log("After assigning "+ this.MPMovie.movie);
    }))
  }
}
