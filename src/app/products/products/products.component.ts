import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() MPMovie : Movie ={
    movie:"",
    MPAPExist:true,
    MPRVExist:true,
    MPCExist:true
  }
  constructor() { }

  ngOnInit(): void {
  }

  products:Product[]=[
    {
      imgPath:"../../../assets/images/cinematicShots.jpg",
      description:"View some best cinematic shots from your favourite movies",
      showProduct:this.MPMovie.MPCExist
    },
    {
      imgPath:"../../../assets/images/wallpapers.jpg",
      description:"Download wallpapers of your favourite movie",
      showProduct:this.MPMovie.MPAPExist
    },
    {
      imgPath:"../../../assets/images/movieReviews.jpg",
      description:"Check our Reviews on recent films",
      showProduct:this.MPMovie.MPRVExist
    }
  ]

  productPage(product : Product){

  }
}
