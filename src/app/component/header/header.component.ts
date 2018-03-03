import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageChanged: EventEmitter<String> =   new EventEmitter();

  isMehra: Boolean;
  public baseUrl: string;

  constructor(
    private router: Router,
    private personService: PersonService,
    private globalService: GlobalService) { }

  ngOnInit() {
    this.isMehra = this.globalService.isMehra;
    this.baseUrl = this.globalService.baseUrl;
  }

  navigate(path: String) {
    console.log('header' + path);
    this.pageChanged.emit(path);
  }

  changePage( path: string ) {
    window.location.href = path;
  }

}
