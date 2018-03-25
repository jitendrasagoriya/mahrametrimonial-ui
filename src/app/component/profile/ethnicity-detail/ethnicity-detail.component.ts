import { Ethinicity } from './../../../model/profile/ethinicity';
import { BuilderService } from './../../../services/builder.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { GlobalService } from './../../../global/global.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ethnicity-detail',
  templateUrl: './ethnicity-detail.component.html',
  styleUrls: ['./ethnicity-detail.component.css']
})
export class EthnicityDetailComponent implements OnInit {

  public ethinicity: Ethinicity;

  constructor(private location: Location,
              private global: GlobalService,
              @Inject(SESSION_STORAGE) private storage: StorageService,
              private builder: BuilderService) { }

  ngOnInit() {

    if (this.storage.get('person') != null) {
      this.ethinicity = this.builder.buildEthinicity( this.storage.get('person') );
    }
  }

  goBack() {
    this.location.back();
  }

}
