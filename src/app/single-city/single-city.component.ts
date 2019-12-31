import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-city',
  templateUrl: './single-city.component.html',
  styleUrls: ['./single-city.component.css']
})
export class SingleCityComponent implements OnInit {

  constructor() { }
  @Input() data;
  ngOnInit() {
  }

}
