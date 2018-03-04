import { Exception } from './../../model/exception';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { GlobalService } from '../../global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    error = '';
    pageName: any;
    public baseUrl: string;

  constructor( private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute,
        private globalService: GlobalService) { }

  ngOnInit() {    // reset login status
    this.baseUrl = this.globalService.baseUrl;
     this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.pageName = params['pagename']  || 'home';
      });
    this.authenticationService.logout();
  }

  onSubmit(f: NgForm) {
     if (!f.valid) {

     } else {
        this.model.username = f.value.usename;
        this.model.password = f.value.password;
        this.login(f);
     }
  }

  login(f: NgForm) {
    this.loading = true;
    this.authenticationService.login( f.value.usename  , f.value.password)
        .subscribe(result => {
          console.log('login componet' + result);
            if (result === true) {
                this.router.navigate([this.pageName]);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        }, error => {
          if (error.error === 'Unauthorized') {
             this.error = 'Username or password is incorrect';
             this.loading = false;
          }
        });
}

}
