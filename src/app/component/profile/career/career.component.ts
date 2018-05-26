import { ProfileBase } from './../../profileBase';
import { ProfileService } from './../../../services/profile.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent extends ProfileBase implements OnInit {


  public aboutCareer: String;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private profileServiceTemp: ProfileService
  , private locationTemp: Location, private tempRouter: Router) {

    super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
    this.setRouter(tempRouter);
  }

  ngOnInit() {
    if (this.storage.get('person') != null) {
      const person =  this.storage.get('person');
      this.aboutCareer = person.aboutJob;
    }
  }
  redirect(redirect: string) {
    this.router.navigate([redirect]);
  }
  goBack() {
    this.location.back();
  }

  _onAboutCareerChange() {
    this.updateProfile('aboutJob', this.aboutCareer , null);
  }

}
