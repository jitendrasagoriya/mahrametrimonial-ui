import { GlobalService } from './../../global/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public baseUrl: string;
  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.baseUrl = this.globalService.baseUrl;
  }

}
