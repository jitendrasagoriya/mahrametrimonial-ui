import { Parants } from './../../../model/profile/parants';
import { ProfileBase } from './../../profileBase';
import { ProfileService } from './../../../services/profile.service';
import { BasicDetail } from './../../../model/profile/basicDetail';
import { Component, OnInit, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent extends ProfileBase  implements OnInit  {
  public isMehra: Boolean = false;
  public basic: BasicDetail;

  constructor( @Inject(SESSION_STORAGE) private storage: StorageService
        , private profileServiceTemp: ProfileService
        , private locationTemp: Location ) {
              super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
  }


  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
      this.basic = this.builder.buildBasicDetails( this.storage.get('person') );
    }
  }
  goBack() {
    this.location.back();
  }

  onBodyTypeChange() {
    this.updateProfile('bodyType', this.basic.bodyType, null);
  }

  onComplexionChange() {
    this.updateProfile('complexion', this.basic.complexion, null);
  }

  onWeightChange() {
    this.updateProfile('weight', this.basic.weight.toString(), null);
  }

  onHeightChange() {
    this.updateProfile('height', this.basic.height.toString(), null);
  }

  onGenderChange() {
    this.updateProfile('gender', this.basic.gender.toString(), null);
  }

  onManageChange() {
    this.updateProfile('weight', this.basic.weight.toString(), null);
  }

  onShowNameChange() {
    this.updateProfile('weight', this.basic.weight.toString(), null);
  }

}
