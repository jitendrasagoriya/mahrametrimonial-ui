import { ProfileService } from './../../../services/profile.service';
import { ProfileBase } from './../../profileBase';
import { BuilderService } from './../../../services/builder.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { LifeStyle } from './../../../model/profile/lifeStyle';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { GlobalService } from '../../../global/global.service';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent extends ProfileBase implements OnInit {

  public isMehra: Boolean = false;
  public lifeStyle: LifeStyle;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private profileServiceTemp: ProfileService
  , private locationTemp: Location , private tempRouter: Router) {

    super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
    this.setRouter(tempRouter);
  }

  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
      this.lifeStyle = this.builder.buildLifeStyle( this.storage.get('person') );
    }
  }

  redirect(redirect: string) {
    this.router.navigate([redirect]);
  }
  goBack() {
    this.location.back();
  }

  _updateFoodAndCook() {
    this.updateProfile('foodAndCook', this.lifeStyle.foodAndCook, null );
  }

  _updateHobbies() {
    this.updateProfile('hobbies', this.lifeStyle.hobbies, null );
  }

  _updateIntrest() {
    this.updateProfile('interest', this.lifeStyle.interest, null );
  }


}
