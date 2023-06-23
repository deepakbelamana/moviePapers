import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../model/product';
import { Movie } from 'src/app/model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() MPMovie : Movie ={
    movie:"",
    mppapexist:true,
    mprvexist:true,
    mpcexist:true
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  products:Product[]=[
    {
      imgPath:"../../../assets/images/cinematicShots.jpg",
      description:"View some best cinematic shots from your favourite movies",
      showProduct:this.MPMovie.mpcexist,
      productType:"mpCs"
    },
    {
      imgPath:"../../../assets/images/wallpapers.jpg",
      description:"Download wallpapers of your favourite movie",
      showProduct:this.MPMovie.mppapexist,
      productType:"mpPap"
    },
    {
      imgPath:"../../../assets/images/movieReviews.jpg",
      description:"Check our Reviews on recent films",
      showProduct:this.MPMovie.mprvexist,
      productType:'mpRv'
    }
  ]

  checkForProductExistence(){

    return  this.products[0].showProduct ==false && this.products[1].showProduct ==false && this.products[2].showProduct ==false;

  }
  goToproductPageMPHub(product : Product){
    /**
     * sending product type and searched movie to MPHub component to display images in db
     */
    this.router.navigate(['MPHub',product.productType,this.MPMovie.movie])
  }
}
