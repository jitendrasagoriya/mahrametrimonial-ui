import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parant-details',
  templateUrl: './parant-details.component.html',
  styleUrls: ['./parant-details.component.css']
})
export class ParantDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
