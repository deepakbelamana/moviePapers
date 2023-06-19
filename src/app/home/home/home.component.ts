import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/servers/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieServie : MovieService) { }
  moviesList:[]=[]
  ngOnInit(): void {
    this.getAllMoviesList();
  }

  getAllMoviesList(){

      this.movieServie.getAllMoviesList().subscribe((moviesList:any)=>{
        this.moviesList=moviesList
      })
  }
}
