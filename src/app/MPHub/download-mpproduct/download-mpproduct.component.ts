import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-mpproduct',
  templateUrl: './download-mpproduct.component.html',
  styleUrls: ['./download-mpproduct.component.css']
})
export class DownloadMPProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadMpImage(imagePath:string,movie:string)
  {
    fetch(imagePath)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = movie+'.jpg';
        link.click();
      });
  }
}
