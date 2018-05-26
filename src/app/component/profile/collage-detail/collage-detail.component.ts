import { ProfileService } from './../../../services/profile.service';
import { ProfileBase } from './../../profileBase';
import { CollageDetails } from './../../../model/profile/collageDetails';
import { BuilderService } from './../../../services/builder.service';
import { LoadingComponent } from './../../loading/loading.component';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { GlobalService } from './../../../global/global.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-collage-detail',
  templateUrl: './collage-detail.component.html',
  styleUrls: ['./collage-detail.component.css']
})
export class CollageDetailComponent extends ProfileBase implements OnInit {

  public isMehra: Boolean;
  public collageDetails: CollageDetails;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private profileServiceTemp: ProfileService
  , private locationTemp: Location) {

    super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
  }

  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
       this.collageDetails = this.builder.buildCollegeDetails( this.storage.get('person') );
    }
  }

  goBack() {
    this.location.back();
  }

  _onHighestEducationChange() {
    this.updateProfile('highestEducation', this.collageDetails.highestEducation, null);
  }

  _onSubjectChange() {
    this.updateProfile('subject', this.collageDetails.subject, null);
  }

  _onSchoolCollegeNameChange() {
    this.updateProfile('schoolCollegeName', this.collageDetails.schoolCollegeName, null);
  }

  _onUniversityChange() {
    this.updateProfile('university', this.collageDetails.university, null);
  }
}
