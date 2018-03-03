import { Person } from './../../model/person';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { ProfileService } from '../../services/profile.service';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  persons: Person[];
  public baseUrl: string;

  constructor(
    private router: Router,
    private personService: PersonService,
    private profileService: ProfileService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.baseUrl = this.globalService.baseUrl;
    this.personService.getPersons().subscribe((responce: any) => {
        console.log( responce.content );
        this.persons = responce.content;
    });
  }

  pageChangedHandler(page: String) {
    window.location.href = '/home';
  }

}
