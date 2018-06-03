import { ProfileService } from './../../../services/profile.service';
import { ProfileBase } from './../../profileBase';
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
export class SiblingsDetailsComponent  extends ProfileBase implements OnInit {

  public sibiling: Sibling;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
    private profileServiceTemp: ProfileService
  , private locationTemp: Location, private parants: FamilyMemberService) {

    super();
    this.setprofileService(profileServiceTemp);
    this.setLocation(locationTemp);
  }

  ngOnInit() {
    if (this.storage.get('person') != null) {
       this.sibiling = this.builder.buildSibiling(this.storage.get('person'));
    }
  }

  goBack() {
    this.location.back();
  }

  _updateNumberOfBrother() {
    this.updateProfile('noOfBrother', this.sibiling.noOfBrothers.toString(), null );
  }

  _updateNumberOfMarriedBrother() {
    this.updateProfile('noOfMarriedBrother', this.sibiling.marriedBrothers.toString(), null );
  }

  _updateNumberOfSister() {
    this.updateProfile('noOfSisters', this.sibiling.noOfSister.toString(), null );
  }

  _updateNumberOfMarriedSister() {
    this.updateProfile('noOfMarriedSisters', this.sibiling.marriedSister.toString(), null );
  }

}
