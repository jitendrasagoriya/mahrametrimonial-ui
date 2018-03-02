import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ProfileService {

  constructor(private http: Http,
    private authenticationService: AuthenticationService,
     private router: Router) { }


  getProfile(): Observable<Profile> {
    // add authorization header with jwt token
    const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.get('http://localhost:8787/api/profile/', options)
        .map((response: Response) => response.json())
        .catch((response: Response) => Observable.throw(this.errorHandler(response)));
 }

 errorHandler(response: Response): void {
  const exception = response.json();
   if (exception.error === 'Unauthorized') {
     this.router.navigate(['login'], { queryParams: { pagename: 'profile' } });
   }
 }


}
