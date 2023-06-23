import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { ProductsComponent } from 'src/app/products/products/products.component';
import { MovieService } from 'src/app/servers/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('productComponent')
  produtComponent!: ProductsComponent;

  constructor(private movieServie : MovieService) { }
  moviesList:[]=[]
  movieRequestedFromSearchComponent:string=""

  MPMovie:Movie={
    movie:this.movieRequestedFromSearchComponent,
    mppapexist:true,
    mprvexist:true,
    mpcexist:true
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

          this.MPMovie.movie=MPMovieRes.movie;
          this.MPMovie.mppapexist=MPMovieRes.mppapexist;
          this.MPMovie.mpcexist=MPMovieRes.mpcexist;
          this.MPMovie.mprvexist=MPMovieRes.mprvexist;

          /*since we are getting only one object and we have only three products
            show product based on the movie existence in db.
          */
          this.produtComponent.products[0].showProduct= this.MPMovie.mpcexist;
          this.produtComponent.products[1].showProduct= this.MPMovie.mppapexist;
          this.produtComponent.products[2].showProduct= this.MPMovie.mprvexist;
          this.produtComponent.MPMovie.movie=this.MPMovie.movie;


    }))
  }
}
