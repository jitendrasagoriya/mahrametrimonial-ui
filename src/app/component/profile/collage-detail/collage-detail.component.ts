import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collage-detail',
  templateUrl: './collage-detail.component.html',
  styleUrls: ['./collage-detail.component.css']
})
export class CollageDetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
