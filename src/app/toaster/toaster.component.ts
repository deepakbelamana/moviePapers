import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  @Input() message:string='';
  @Input() success:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }



}
