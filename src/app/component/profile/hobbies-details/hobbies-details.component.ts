import { Habit } from './../../../model/profile/habit';
import { FamilyMemberService } from './../../../services/family-member.service';
import { ProfileService } from './../../../services/profile.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ProfileBase } from './../../profileBase';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-hobbies-details',
  templateUrl: './hobbies-details.component.html',
  styleUrls: ['./hobbies-details.component.css']
})
export class HobbiesDetailsComponent extends ProfileBase implements OnInit {

  public habit: Habit;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private profileServiceTemp: ProfileService
  , private locationTemp: Location ) {

    super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
  }

  ngOnInit() {
    if (this.storage.get('person') != null) {
      this.habit = this.builder.buildHabit(this.storage.get('person'));
   }
  }

  goBack() {
    this.location.back();
  }

  _updateSomke() {
    this.updateProfile('somke', this.habit.smoke, null );
  }

  _updateDrink() {
    this.updateProfile('drink', this.habit.drink, null );
  }

}
