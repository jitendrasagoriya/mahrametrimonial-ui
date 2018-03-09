import { LoadingComponent } from './../loading/loading.component';
import { FamilyMember } from './../../model/familyMembers';
import { Profile } from './../../model/profile';
import { ProfileService } from './../../services/profile.service';
import { Person } from './../../model/person';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
   public isMehra: Boolean;
   public usernName: string;
   public self: Boolean = true;

  constructor(private router: Router,
    private personService: PersonService,
    private profileService: ProfileService,
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private loading: LoadingComponent) { }

  ngOnInit() {
     this.loading.show();
     this.baseUrl = this.globalService.baseUrl;
     this.isMehra = this.globalService.isMehra;

     this.route.params.subscribe( params => {
        if (params['name']) {
          this.self = false;
          this.usernName = params['name'];
        }
     });


     if (this.self) {
      this.profileService.getProfile().subscribe((profile: Profile) => {
        this.person = profile.person;
        console.log( profile );
        profile.familyMembers.forEach(member => {
           if (member.relation === 'FATHER') {
             this.father = member;
           } else if (member.relation === 'MOTHER') {
             this.mother = member;
           } else {
             this.sibilings.push(member);
           }
        });
        this.loading.hide();
      });
     } else {
      this.profileService.getProfileByName(this.usernName).subscribe((profile: Profile) => {
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
        this.loading.hide();
      });
     }

  }

}
