import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habits-details',
  templateUrl: './habits-details.component.html',
  styleUrls: ['./habits-details.component.css']
})
export class HabitsDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
