import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';

@Injectable()
export class SearchService {

  public url: string;

  constructor(private http: Http,
              private authenticationService: AuthenticationService,
              private router: Router,
              private globalService: GlobalService) {

                if (this.globalService.isLocal) {
                    this.url = this.globalService.hostLocal;
                } else {
                    this.url = this.globalService.hostRemote;
                }
              }
}
