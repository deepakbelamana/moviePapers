import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';
import { HttpClient } from '@angular/common/http';
import { MPPaperProduct } from '../model/mpproduct';


@Injectable({
  providedIn: 'root'
})
export class MPHubService {

  constructor(private movieService : MovieService,private http:HttpClient) { }

  /**
   * service call to get product images based in the movie selected and product type
   */
  getMPProductImages(productType:string,movie:string){
    return this.http.get<MPPaperProduct>(this.movieService.baseLocalApiUrl+productType+"/"+movie)
  }
}
