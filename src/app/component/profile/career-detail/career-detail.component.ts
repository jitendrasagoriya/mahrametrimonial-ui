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
export class CareerDetailComponent implements OnInit {

  public isMehra: Boolean;
  public careerDetail: CareerDetail;


  constructor(private location: Location,
    private global: GlobalService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private loading: LoadingComponent,
    private builder: BuilderService) { }

  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
       this.careerDetail = this.builder.buildCareerDetails( this.storage.get('person') );
    }
  }

  goBack() {
    this.location.back();
  }

}
