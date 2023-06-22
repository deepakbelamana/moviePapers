import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NoProductExistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
