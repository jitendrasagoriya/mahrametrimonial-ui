import { FamilyValues } from './../../../model/profile/familyValues';
import { BuilderService } from './../../../services/builder.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-family-values',
  templateUrl: './family-values.component.html',
  styleUrls: ['./family-values.component.css']
})
export class FamilyValuesComponent implements OnInit {

  public familyValues: FamilyValues;


  constructor(
    private location: Location,
     @Inject(SESSION_STORAGE) private storage: StorageService,
    private builder: BuilderService
   ) { }

  ngOnInit() {
    if (this.storage.get('person') != null) {
      this.familyValues = this.builder.buildFamilyValues(this.storage.get('person'));
    }
  }

  goBack() {
    this.location.back();
  }

}
