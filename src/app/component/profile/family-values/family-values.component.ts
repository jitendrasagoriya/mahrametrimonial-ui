import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-values',
  templateUrl: './family-values.component.html',
  styleUrls: ['./family-values.component.css']
})
export class FamilyValuesComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
