import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { ToasterComponent } from './toaster/toaster.component';
import { AuthGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './User/forgot-password/forgot-password.component';

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
    DownloadMPProductComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ToasterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsComponent,DownloadMPProductComponent,ToasterComponent,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
