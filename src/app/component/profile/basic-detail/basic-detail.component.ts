import { BasicDetail } from './../../../model/profile/basicDetail';
import { BuilderService } from './../../../services/builder.service';
import { Location } from '@angular/common';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { GlobalService } from '../../../global/global.service';

@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent implements OnInit, OnDestroy {

  public isMehra: Boolean = false;
  public basic: BasicDetail;

  constructor(private location: Location,
              private global: GlobalService,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private builder: BuilderService) { }


  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
      this.basic = this.builder.buildBasicDetails( this.storage.get('person') );
    }
  }

  ngOnDestroy() {   }

goBack() {
    this.location.back();
  }
}
