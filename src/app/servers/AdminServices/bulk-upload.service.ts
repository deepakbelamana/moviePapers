import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BulkUploadService {

  baseLocalApiUrl:String = "http://localhost:8080/";
  baseProductionApiUrl : String ="https://broken-whistle-production-818f.up.railway.app/"
  constructor(private http : HttpClient) { }

  bulkUploadDataToMongo(bulkUploadData:any) {
    return this.http.post(this.baseProductionApiUrl+"bulkUpload/imagePaths",bulkUploadData,{responseType: 'text'});
  }
}
