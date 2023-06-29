import { Component, OnInit } from '@angular/core';
import { BulkUploadService } from 'src/app/servers/AdminServices/bulk-upload.service';

@Component({
  selector: 'app-bulk-upload-mongo',
  templateUrl: './bulk-upload-mongo.component.html',
  styleUrls: ['./bulk-upload-mongo.component.css']
})
export class BulkUploadMongoComponent implements OnInit {

  constructor(private bulkUploadService : BulkUploadService) { }

  ngOnInit(): void {
  }

  selectedFolder:string="";
  productFolder=['MPCinematic','MPPaper','MPReview'];
  imgExtensions=['png','jpg'];

  bulkUploadToMongo(bulkUploadForm :any) {
      this.bulkUploadService.bulkUploadDataToMongo(bulkUploadForm.value).subscribe((response:any)=>{
        alert(response);
      })
  }
}
