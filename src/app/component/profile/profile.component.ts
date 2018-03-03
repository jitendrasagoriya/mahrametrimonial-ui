import { FamilyMember } from './../../model/familyMembers';
import { Profile } from './../../model/profile';
import { ProfileService } from './../../services/profile.service';
import { Person } from './../../model/person';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   person: Person;
   father: FamilyMember;
   mother: FamilyMember;
   sibilings: FamilyMember[] = [];

   public baseUrl: string;

  constructor(private router: Router,
    private personService: PersonService,
    private profileService: ProfileService,
    private globalService: GlobalService) { }

  ngOnInit() {
     this.baseUrl = this.globalService.baseUrl;

     this.profileService.getProfile().subscribe((profile: Profile) => {
       console.log(profile);
       this.person = profile.person;

       profile.familyMembers.forEach(member => {
          if (member.relation === 'FATHER') {
            this.father = member;
          } else if (member.relation === 'MOTHER') {
            this.mother = member;
          } else {
            this.sibilings.push(member);
          }
       });

     });
  }

}
