import { Person } from './../../../model/person';
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
export class ParantDetailsComponent implements OnInit {
  public isMehra: Boolean;
  public father: FamilyMember;
  public mother: FamilyMember;
  public income: Number;
  private person: Person;

  constructor(private location: Location,
    private global: GlobalService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private loading: LoadingComponent,
    private builder: BuilderService,
    private parants: FamilyMemberService) { }


  ngOnInit() {
    this.isMehra = this.global.isMehra;
    if (this.storage.get('person') != null) {
      this.person = this.storage.get('person');
      this.income = this.person.familyIncome;
   }
    this.loading.show();
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
      this.loading.hide();
    });
  }

  goBack() {
    this.location.back();
  }

}
