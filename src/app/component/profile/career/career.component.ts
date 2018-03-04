import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private router: Router,
              private location: Location) { }

  ngOnInit() {
  }

  redirect(redirect: string) {
    this.router.navigate([redirect]);
  }


  goBack() {
    this.location.back();
  }

}
