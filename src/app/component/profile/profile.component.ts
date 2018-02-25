import { Person } from './../../model/person';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   person: Person;

  constructor(private router: Router,
    private personService: PersonService) { }

  ngOnInit() {
     this.personService.getPerson().subscribe((person1: Person) => {
       console.log(person1);
       this.person = person1;
     });
  }

}
