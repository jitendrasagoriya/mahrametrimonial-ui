import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { GlobalService } from '../global/global.service';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class ProfileService {

  public url: string;
  public requestUrl: string;

  constructor(private http: Http,
    private authenticationService: AuthenticationService,
     private router: Router,
     private globalService: GlobalService,
     private logger: NGXLogger ) {
          if (this.globalService.isLocal) {
              this.url = this.globalService.hostLocal;
          } else {
              this.url = this.globalService.hostRemote;
          }
      }


  getProfile(): Observable<Profile> {
    // add authorization header with jwt token
    const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });

    this.logger.info('getProfile():' + this.url + '/profile/');
    // get users from api
    return this.http.get(this.url + '/profile/', options)
        .map((response: Response) => response.json())
        .catch((response: Response) => Observable.throw(this.errorHandler(response)));
 }

 getProfileByName(name: String): Observable<Profile> {
    // add authorization header with jwt token
    const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });

    this.logger.info('getProfileByName :' + this.url + '/profile/');

    // get users from api
    return this.http.get(this.url + '/profile/' + name, options)
        .map((response: Response) => response.json())
        .catch((response: Response) => Observable.throw(this.errorHandler(response)));
 }

 changeProfile(jsonObject: any) {
    const headers = new Headers({ 'x-auth-token': this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });

    this.logger.info('getProfileByName :' + this.url + '/profile/');

    return this.http.put(this.url + '/profile/', jsonObject, options)
        .map( (response: Response) => response.text)
        .catch((response: Response) => Observable.throw(this.errorHandler(response)));
 }

 errorHandler(response: Response): void {
  const exception = response.json();
   if (exception.error === 'Unauthorized') {
     this.router.navigate(['login'], { queryParams: { pagename: 'profile' } });
   }
 }


}
