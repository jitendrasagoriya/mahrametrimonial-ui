import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../global/global.service';

@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent implements OnInit {

  public isMehra: Boolean = false;

  constructor(private location: Location,
              private global: GlobalService) { }


  ngOnInit() {
    this.isMehra = this.global.isMehra;
  }

  goBack() {
    this.location.back();
  }


}
