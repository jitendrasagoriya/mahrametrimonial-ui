import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { Person } from '../model/person';

@Injectable()
export class PersonService {

  constructor(private http: Http,
    private authenticationService: AuthenticationService) { }

    getPersons(): Observable<Person[]> {
      // add authorization header with jwt token
      const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
      const options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('/api/person/', options)
          .map((response: Response) => response.json());
  }

}
