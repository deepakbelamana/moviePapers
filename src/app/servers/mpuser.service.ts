import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mpuser } from '../model/mpuser';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class MpuserService {

  constructor(private movieService:MovieService,private http : HttpClient) { }

  registerUser(mpUser:Mpuser){
      return this.http.post(this.movieService.baseLocalApiUrl+"user/register",mpUser,{responseType: 'text'})
  }
}
