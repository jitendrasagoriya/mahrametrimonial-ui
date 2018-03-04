import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethnicity-detail',
  templateUrl: './ethnicity-detail.component.html',
  styleUrls: ['./ethnicity-detail.component.css']
})
export class EthnicityDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
