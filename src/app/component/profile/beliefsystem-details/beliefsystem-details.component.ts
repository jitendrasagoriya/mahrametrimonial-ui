import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beliefsystem-details',
  templateUrl: './beliefsystem-details.component.html',
  styleUrls: ['./beliefsystem-details.component.css']
})
export class BeliefsystemDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
