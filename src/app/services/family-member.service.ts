import { FamilyMember } from './../model/familyMembers';
import { Observable } from 'rxjs/Observable';
import { ExceptionService } from './exception.service';
import { GlobalService } from './../global/global.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FamilyMemberService {

  public url: string;

  constructor(
    private http: Http,
     private authenticationService: AuthenticationService,
     private router: Router,
     private globalService: GlobalService,
     private exceptionService: ExceptionService
  ) {

    if (this.globalService.isLocal) {
      this.url = this.globalService.hostLocal;
    } else {
        this.url = this.globalService.hostRemote;
    }

  }

  getFamilyMember(): Observable<FamilyMember[]> {
    // add authorization header with jwt token
    const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get(this.url + '/member/self', options)
        .map((response: Response) => response.json())
        .catch((response: Response) => Observable.throw(
          this.exceptionService.errorHandlerWithPage(response, 'parantDetails')
        ));
  }



}
