import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-product-exist',
  templateUrl: './no-product-exist.component.html',
  styleUrls: ['./no-product-exist.component.css']
})
export class NoProductExistComponent implements OnInit {

  @Input()searchedMovie :string='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
