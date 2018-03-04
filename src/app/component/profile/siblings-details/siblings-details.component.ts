import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siblings-details',
  templateUrl: './siblings-details.component.html',
  styleUrls: ['./siblings-details.component.css']
})
export class SiblingsDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
