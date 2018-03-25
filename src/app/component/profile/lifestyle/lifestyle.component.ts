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
export class LifestyleComponent implements OnInit {

  public isMehra: Boolean = false;
  public lifeStyle: LifeStyle;

  constructor(
     private router: Router,
     private location: Location,
     private global: GlobalService,
     @Inject(SESSION_STORAGE) private storage: StorageService,
     private builder: BuilderService ) { }

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

}
