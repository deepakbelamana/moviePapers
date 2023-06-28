import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BulkUploadService {

  baseLocalApiUrl:String = "http://localhost:8080/";
  baseProductionApiUrl : String ="https://moviepapers-api.up.railway.app/"
  constructor(private http : HttpClient) { }

  bulkUploadDataToMongo(bulkUploadData:any) {
    return this.http.post(this.baseLocalApiUrl+"bulkUpload/imagePaths",bulkUploadData,{responseType: 'text'});
  }
}
