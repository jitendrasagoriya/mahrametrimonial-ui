import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor( private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  onSubmit(f: NgForm) {
     if (!f.valid) {

     } else {
         console.log('land' + JSON.stringify(f.value));
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
                this.router.navigate(['/']);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });
}

}
