import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public baseUrl: string;

  constructor( private globalService: GlobalService ) { }

  ngOnInit() {
    this.baseUrl = this.globalService.baseUrl;
  }

}
