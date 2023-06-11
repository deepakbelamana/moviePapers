import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products:Product[]=[
    {
      imgPath:"../../../assets/images/cinematicShots.jpg",
      description:"View some best cinematic shots from your favourite movies"
    },
    {
      imgPath:"../../../assets/images/wallpapers.jpg",
      description:"Download wallpapers of your favourite movie"
    },
    {
      imgPath:"../../../assets/images/movieReviews.jpg",
      description:"Check our Reviews on recent films"
    }
  ]

  productPage(product : Product){

  }
}
