import { GlobalService } from './../../global/global.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  baseUrl: string;
  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.baseUrl = this.global.baseUrl;
  }

}
