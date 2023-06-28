import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MPCinematicProduct } from 'src/app/model/mpcinematic-product';
import { MPPaperProduct } from 'src/app/model/mpproduct';
import { ProductsComponent } from 'src/app/products/products/products.component';
import { MPHubService } from 'src/app/servers/mphub.service';
import { DownloadMPProductComponent } from '../download-mpproduct/download-mpproduct.component';

@Component({
  selector: 'app-mphub',
  templateUrl: './mphub.component.html',
  styleUrls: ['./mphub.component.css'],
})
export class MPHubComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private mpHubService: MPHubService,
    private productsComponent: ProductsComponent,
    private downloadMpProduct: DownloadMPProductComponent
  ) {}

  selectedProduct: string = '';
  searchedMovie: string = '';
  productToCall: string = '';

  isMPCinematic: boolean = false;
  isMPPaper: boolean = false;

  MPPaperProduct: MPPaperProduct[] = [];
  MPCinematicProduct: MPCinematicProduct[] = [];
  ngOnInit(): void {
    /**
     * assigning selected variables,for searching images from db
     */
    this.route.params.subscribe((param: any) => {
      this.selectedProduct = param.productType;
      this.searchedMovie = param.movie;
      //calling the service to get product images
      this.productToCall = this.productNameBasedOnProductType(
        this.selectedProduct
      );
      this.getMPProductImages(this.productToCall, this.searchedMovie);
    });
  }
  /**
   * function to get product images based in the movie selected and product type
   */
  getMPProductImages(productType: string, movie: string) {
    this.mpHubService.getMPProductImages(productType, movie).subscribe((mpProduct: any) => {
        if (this.isMPCinematic) {
          this.MPCinematicProduct = mpProduct;
        }
        if (this.isMPPaper) {
          this.MPPaperProduct = mpProduct;
        }
      });
  }

  /**
   * sets the one of the path variable in service call
   * based the product clicked
   * the return value will be sent as path variable
   * @param productType
   * @returns string
   */
  productNameBasedOnProductType(productType: string): string {
    if (productType == this.productsComponent.products[0].productType) {
      this.isMPCinematic = true;
      return 'mp-cinematic';
    }
    if (productType == this.productsComponent.products[1].productType) {
      this.isMPPaper = true;
      return 'mp-paper';
    }
    if (productType == this.productsComponent.products[2].productType) {
      return 'mp-review';
    }
    return '';
  }

  downloadMpImage(MPImgPath:string,MPMovieName:string)
  {
    this.downloadMpProduct.downloadMpImage(MPImgPath,MPMovieName);
  }
}
