import { ProfileService } from './../../../services/profile.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ProfileBase } from './../../profileBase';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent extends ProfileBase implements OnInit {

  public aboutFamily: String;

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
      this.aboutFamily = person.aboutFamily;
    }
  }

  redirect(redirect: string) {
    this.router.navigate([redirect]);
  }

  goBack() {
    this.location.back();
  }

  _onAboutfamilyChange() {
    this.updateProfile('aboutJob', this.aboutFamily , null);
  }
}
