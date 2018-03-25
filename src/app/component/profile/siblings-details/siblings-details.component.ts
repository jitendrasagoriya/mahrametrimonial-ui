import { Sibling } from './../../../model/profile/siblings';
import { FamilyMemberService } from './../../../services/family-member.service';
import { BuilderService } from './../../../services/builder.service';
import { LoadingComponent } from './../../loading/loading.component';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { GlobalService } from './../../../global/global.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-siblings-details',
  templateUrl: './siblings-details.component.html',
  styleUrls: ['./siblings-details.component.css']
})
export class SiblingsDetailsComponent implements OnInit {

  public sibiling: Sibling;

  constructor(
    private location: Location,
     @Inject(SESSION_STORAGE) private storage: StorageService,
    private builder: BuilderService
  ) { }

  ngOnInit() {
    if (this.storage.get('person') != null) {
       this.sibiling = this.builder.buildSibiling(this.storage.get('person'));
    }
  }

  goBack() {
    this.location.back();
  }

}
