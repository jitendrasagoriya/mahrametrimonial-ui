import { ProfileService } from './../../../services/profile.service';
import { ProfileBase } from './../../profileBase';
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
export class PersonalDetailComponent extends ProfileBase implements OnInit, OnDestroy {

  public personalDetail: PersonalDetail;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private profileServiceTemp: ProfileService
  , private locationTemp: Location) {

    super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
  }

  ngOnInit() {
    if (this.storage.get('person') != null) {
      this.personalDetail = this.builder.buildPersonalDetails( this.storage.get('person') );
    }
  }

  ngOnDestroy() {
  }

  goBack() {
    this.location.back();
  }

  onEmploymentChange() {
    this.updateProfile('employment', this.personalDetail.occupation, null);
  }

  onMaritalStatusChange() {
    this.updateProfile('maritalStatus', this.personalDetail.maritalStatus, null);
  }

  onhabitChange() {
    this.updateProfile('eatingHabit', this.personalDetail.habit, null);
  }

  onEyeColorChange() {
    this.updateProfile('eyeColor', this.personalDetail.eyeColor, null);
  }

  onDOBChange() {
    this.updateProfile('dob', this.personalDetail.dob, null);
  }

}
