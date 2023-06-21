import { Component, OnInit,Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mpsearch',
  templateUrl: './mpsearch.component.html',
  styleUrls: ['./mpsearch.component.css']
})
export class MPSearchComponent implements OnInit {

  @Input() moviesList =[];
  @Output() movieSearchItemfromSearchComponent : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  sendSearchItem(searchItem:any)
  {
    this.movieSearchItemfromSearchComponent.emit(searchItem);
  }

}
