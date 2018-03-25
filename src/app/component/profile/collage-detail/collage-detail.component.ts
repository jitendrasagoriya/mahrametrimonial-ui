import { CollageDetails } from './../../../model/profile/collageDetails';
import { BuilderService } from './../../../services/builder.service';
import { LoadingComponent } from './../../loading/loading.component';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { GlobalService } from './../../../global/global.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-collage-detail',
  templateUrl: './collage-detail.component.html',
  styleUrls: ['./collage-detail.component.css']
})
export class CollageDetailComponent implements OnInit {

  public isMehra: Boolean;
  public collageDetails: CollageDetails;

  constructor(private location: Location,
              private global: GlobalService,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private loading: LoadingComponent,
              private builder: BuilderService) { }

  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
       this.collageDetails = this.builder.buildCollegeDetails( this.storage.get('person') );
    }
  }

  goBack() {
    this.location.back();
  }
}
