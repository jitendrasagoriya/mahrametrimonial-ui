import { ExceptionService } from './exception.service';
import { error } from 'protractor';
import { GlobalService } from './../global/global.service';
import { Person } from './../model/person';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { Exception } from '../model/exception';
import { Router } from '@angular/router';


@Injectable()
export class PersonService {

  public url: string;

  constructor(private http: Http,
     private authenticationService: AuthenticationService,
     private router: Router,
     private globalService: GlobalService, private exceptionService: ExceptionService  ) {
      if (this.globalService.isLocal) {
          this.url = this.globalService.hostLocal;
      } else {
          this.url = this.globalService.hostRemote;
      }

     }

    getPersons(): Observable<Person[]> {
      // add authorization header with jwt token
      const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
      const options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get(this.url + '/person/', options)
          .map((response: Response) => response.json())
          .catch((response: Response) => Observable.throw(
            this.exceptionService.errorHandlerWithPage(response, 'search')
          ));
  }

  getPerson(): Observable<Person> {
     // add authorization header with jwt token
     const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
     const options = new RequestOptions({ headers: headers });

     // get users from api
     return this.http.get(this.url + '/person/profile/view', options)
         .map((response: Response) => response.json())
         .catch((response: Response) => Observable.throw(this.exceptionService.errorHandler(response)));
  }

  registerUser(userName: string, email: string, paswword: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const data = {
      'username': userName ,
      'password': paswword,
      'email': email,
      'enabled': 1
    };

    return this.http.post( this.globalService.localBaseUrl + '/register', data, {headers: headers})
            .map((response: Response) => response.json() )
            .catch((response: Response) => Observable.throw(response));
  }
}
