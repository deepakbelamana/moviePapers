import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { ProductsComponent } from './products/products/products.component';
import { RequestComponent } from './requests/request/request.component';
import { FooterComponent } from './footer/footer/footer.component';
import { MPSearchComponent } from './MPSearch/mpsearch/mpsearch.component';
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MPHubComponent } from './MPHub/mphub/mphub.component';
import { NoProductExistComponent } from './NoExistence/no-product-exist/no-product-exist.component';
import { BulkUploadMongoComponent } from './Admin/bulk-upload-mongo/bulk-upload-mongo.component';
import { DownloadMPProductComponent } from './MPHub/download-mpproduct/download-mpproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    RequestComponent,
    FooterComponent,
    MPSearchComponent,
    MPHubComponent,
    NoProductExistComponent,
    BulkUploadMongoComponent,
    DownloadMPProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule
  ],
  providers: [ProductsComponent,DownloadMPProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
