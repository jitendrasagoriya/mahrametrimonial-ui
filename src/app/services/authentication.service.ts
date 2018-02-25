import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: Http) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {

    // add authorization header with jwt token
    const headers = new Headers({ 'Authorization':  'Basic ' + btoa(username + ':' + password) });
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const options = new RequestOptions({ headers: headers });
    const data = {};

    return this.http.post('http://localhost:8787/api/auth', data, {headers: headers})
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            const token = response.json() && response.json().token;
            if (token) {
                // set token property
                this.token = token;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
