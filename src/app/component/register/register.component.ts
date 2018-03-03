import { NgForm } from '@angular/forms';
import { GlobalService } from './../../global/global.service';
import { ProfileService } from './../../services/profile.service';
import { PersonService } from './../../services/person.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public baseUrl: string;
  loading = false;
  error = '';
  pageName = 'home';

  constructor(private router: Router,
    private personService: PersonService,
    private profileService: ProfileService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.baseUrl = this.globalService.baseUrl;
  }

  onSubmit(f: NgForm) {
    console.log('register');
    if (!f.valid) {
      console.log('please give all fields values');
    } else {
       this.registerUser(f);
    }
  }

  registerUser(f: NgForm) {
    this.loading = true;
    this.personService.registerUser( f.value.usename, f.value.email  , f.value.password)
        .subscribe(result => {
            if (result === true) {
                console.log(result);
                this.router.navigate([this.pageName]);
            } else {
                this.error = 'Somethig went wrong. Please try again';
                this.loading = false;
            }
        });
  }

}
