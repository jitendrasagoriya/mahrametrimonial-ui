import { ProfileService } from './../../../services/profile.service';
import { ProfileBase } from './../../profileBase';
import { Ethinicity } from './../../../model/profile/ethinicity';
import { BuilderService } from './../../../services/builder.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { GlobalService } from './../../../global/global.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ethnicity-detail',
  templateUrl: './ethnicity-detail.component.html',
  styleUrls: ['./ethnicity-detail.component.css']
})
export class EthnicityDetailComponent extends ProfileBase implements OnInit {

  public ethinicity: Ethinicity;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
      private profileServiceTemp: ProfileService
    , private locationTemp: Location) {

      super();
      this.setprofileService(profileServiceTemp);
      this.setLocation(locationTemp);
 }

  ngOnInit() {

    if (this.storage.get('person') != null) {
      this.ethinicity = this.builder.buildEthinicity( this.storage.get('person') );
    }
  }

  goBack() {
    this.location.back();
  }

  _onGotraChange() {
    this.updateProfile('gotra', this.ethinicity.gotra, null);
  }

  _onGotraToSaveChange() {
    this.updateProfile('gotraToSave', this.ethinicity.gotraToSave, null);
  }

  _onCasteChange() {
    this.updateProfile('cast', this.ethinicity.caste, null);
  }

}
