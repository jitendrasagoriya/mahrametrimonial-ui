import { ProfileService } from './../../../services/profile.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ProfileBase } from './../../profileBase';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent extends ProfileBase implements OnInit {

  public aboutEducation: String;

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
       this.aboutEducation = person.aboutEducation;
    }
  }

  redirect(redirect: string) {
    this.router.navigate([redirect]);
  }

  goBack() {
    this.location.back();
  }

  onEmploymentChange() {
    this.updateProfile('aboutEducation', this.aboutEducation , null);
  }

}
