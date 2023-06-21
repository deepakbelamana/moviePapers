import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //api deployed on railway app
   baseProductionApiUrl : String ="https://broken-whistle-production-818f.up.railway.app/"
   baseLocalApiUrl:String = "http://localhost:8080/"
  constructor(private http : HttpClient) {
  }

  getAllMoviesList(){
    return this.http.get(this.baseProductionApiUrl+"moviesList")
  }

  getMPMovieBasedOnMovieSearchItem(searchItem:string) {
    return this.http.get<Movie>(this.baseProductionApiUrl+"movie/"+searchItem);
  }
}
