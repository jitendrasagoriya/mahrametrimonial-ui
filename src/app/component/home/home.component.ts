import { LoadingComponent } from './../loading/loading.component';
import { Person } from './../../model/person';
import { PersonService } from './../../services/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public baseUrl: string;
  public isMehra: Boolean = false;
  persons: Person[];
  constructor(
    private router: Router,
    private personService: PersonService,
    private profileService: ProfileService,
    private globalService: GlobalService,
    private route: ActivatedRoute,
    private loading: LoadingComponent
   ) { }

  ngOnInit() {

    this.route.params.subscribe( params => {
      if (params['load']) {
        document.getElementById('farji-overlay').remove();
      }
   });

    this.loading.show();
    this.baseUrl = this.globalService.baseUrl;
    this.isMehra = this.globalService.isMehra;

    this.baseUrl = this.globalService.baseUrl;
    this.personService.getPersons().subscribe((responce: any) => {
        this.persons = responce.content;
        this.loading.hide();
    });
  }

  viewProfile(userName: String) {
    this.router.navigate(['/profile', userName]);
  }

  pageChangedHandler(page: String) {
    window.location.href = '/home';
  }

}
