import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies-details',
  templateUrl: './hobbies-details.component.html',
  styleUrls: ['./hobbies-details.component.css']
})
export class HobbiesDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
