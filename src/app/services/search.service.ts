import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: Http,
              private authenticationService: AuthenticationService,
              private router: Router) { }
}
