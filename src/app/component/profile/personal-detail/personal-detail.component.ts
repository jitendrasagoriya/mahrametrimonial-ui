import { BuilderService } from './../../../services/builder.service';
import { PersonalDetail } from './../../../model/profile/personalDetails';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit, OnDestroy {

  public personalDetail: PersonalDetail;

  constructor(private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
  private builder: BuilderService) {
    if (this.storage.get('person') != null) {
      this.personalDetail = this.builder.buildPersonalDetails( this.storage.get('person') );    }
   }

  ngOnInit() {
  }

  ngOnDestroy() {

   }

  goBack() {
    this.location.back();
  }

}
