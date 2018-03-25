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
export class HabitsDetailsComponent implements OnInit {

  public isMehra: Boolean = false;
  public habit: Habit;

  constructor(
    private location: Location,
     @Inject(SESSION_STORAGE) private storage: StorageService,
    private builder: BuilderService,
    private global: GlobalService
  ) { }

  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
      this.habit = this.builder.buildHabit(this.storage.get('person'));
    }
  }

  goBack() {
    this.location.back();
  }

}
