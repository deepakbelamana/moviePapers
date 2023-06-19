import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-mpsearch',
  templateUrl: './mpsearch.component.html',
  styleUrls: ['./mpsearch.component.css']
})
export class MPSearchComponent implements OnInit {

  @Input() moviesList =[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
