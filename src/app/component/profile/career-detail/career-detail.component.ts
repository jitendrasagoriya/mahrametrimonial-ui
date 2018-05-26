import { ProfileService } from './../../../services/profile.service';
import { ProfileBase } from './../../profileBase';
import { FamilyMember } from './../../../model/familyMembers';
import { CareerDetail } from './../../../model/profile/careerDetail';
import { BuilderService } from './../../../services/builder.service';
import { LoadingComponent } from './../../loading/loading.component';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { GlobalService } from './../../../global/global.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.css']
})
export class CareerDetailComponent extends ProfileBase implements OnInit {

  public isMehra: Boolean;
  public careerDetail: CareerDetail;


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
       this.careerDetail = this.builder.buildCareerDetails( this.storage.get('person') );
    }
  }

  goBack() {
    this.location.back();
  }

  _onOccupationChange() {
    this.updateProfile('occupation', this.careerDetail.occupation, null);
  }

  _onDesignationChange() {
    this.updateProfile('designation', this.careerDetail.designation, null);
  }

  _onIncomeChange() {
    this.updateProfile('income', this.careerDetail.income.toString(), null);
  }

  _onExperienceChange() {
    this.updateProfile('experience', this.careerDetail.experience.toString(), null);
  }

}
