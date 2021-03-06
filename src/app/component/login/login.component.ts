import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

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

  constructor( private router: Router,
        private authenticationService: AuthenticationService,
        private route: ActivatedRoute) { }

  ngOnInit() {    // reset login status

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
            if (result === true) {
                console.log(result);
                this.router.navigate([this.pageName]);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
}

}
