import { ProfileService } from './../../../services/profile.service';
import { Person } from './../../../model/person';
import { ProfileBase } from './../../profileBase';
import { FamilyMemberService } from './../../../services/family-member.service';
import { FamilyMember } from './../../../model/familyMembers';
import { BuilderService } from './../../../services/builder.service';
import { LoadingComponent } from './../../loading/loading.component';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { GlobalService } from './../../../global/global.service';
import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-parant-details',
  templateUrl: './parant-details.component.html',
  styleUrls: ['./parant-details.component.css']
})
export class ParantDetailsComponent extends ProfileBase implements OnInit {
  public isMehra: Boolean;
  public father: FamilyMember;
  public mother: FamilyMember;
  public income: Number;
  private person: Person;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
  private profileServiceTemp: ProfileService
, private locationTemp: Location, private parants: FamilyMemberService) {

  super();
  this.setprofileService(profileServiceTemp);
  this.setLocation(locationTemp);
}


  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
      this.person = this.storage.get('person');
      this.income = this.person.familyIncome;
   }
    this.loadingComponent.show();
    this.getParants();
  }

  getParants() {
    this.parants.getFamilyMember().subscribe((familyMembers: FamilyMember[]) => {
      familyMembers.forEach(member => {
        if (member.relation === 'FATHER') {
          this.father = member;
        } else if (member.relation === 'MOTHER') {
          this.mother = member;
        }
      });
      this.loadingComponent.hide();
    });
  }

  goBack() {
    this.location.back();
  }

  getFatherId(): any {
    return this.father.id;
  }

  getMotherId(): any {
    return this.mother.id;
  }

  _updateMotherName() {
    this.updateProfile('name', this.mother.name, this.getMotherId());
  }

  _updateMotherOccupation() {
    this.updateProfile('occupation', this.mother.occupation, this.getMotherId());
  }

  _updateFatherName() {
    this.updateProfile('name', this.father.name, this.getFatherId());
  }

  _updateFatherOccupation() {
    this.updateProfile('occupation', this.father.occupation, this.getFatherId());
  }

  _updateFamilyIncome() {
    this.updateProfile('familyIncome', this.income.toString(), null);
  }

}
