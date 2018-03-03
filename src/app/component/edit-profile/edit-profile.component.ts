import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public baseUrl: string;

  constructor(private globalService: GlobalService) {
      this.baseUrl = this.globalService.baseUrl;
   }

  ngOnInit() {
  }

}
