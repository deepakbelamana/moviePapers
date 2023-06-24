import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MPHubComponent } from './MPHub/mphub/mphub.component';
import { BulkUploadMongoComponent } from './Admin/bulk-upload-mongo/bulk-upload-mongo.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
   component:HomeComponent
  },
  {
    path:'MPHub/:productType/:movie',
    component:MPHubComponent,
  },
  {
    path:'bulkUpload',
    component:BulkUploadMongoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
