import { ProfileService } from './../../../services/profile.service';
import { ProfileBase } from './../../profileBase';
import { Habit } from './../../../model/profile/habit';
import { BuilderService } from './../../../services/builder.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { GlobalService } from '../../../global/global.service';

@Component({
  selector: 'app-habits-details',
  templateUrl: './habits-details.component.html',
  styleUrls: ['./habits-details.component.css']
})
export class HabitsDetailsComponent extends ProfileBase implements OnInit {

  public isMehra: Boolean = false;
  public habit: Habit;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private profileServiceTemp: ProfileService
  , private locationTemp: Location ) {

    super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
}

  ngOnInit() {
    this.isMehra = this.global.isMehra;
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
