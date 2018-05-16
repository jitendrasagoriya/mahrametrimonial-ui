import { AuthenticationService } from './services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './global/global.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isMehra: Boolean = false;
  stopCondition: Boolean = false;
  name: String;
  constructor(private translate: TranslateService,
    private global: GlobalService,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.isMehra = this.global.isMehra;
     console.log(localStorage.getItem('currentUser'));
    if(localStorage.getItem('currentUser') !=null ){
      this.name =  JSON.parse( localStorage.getItem('currentUser') ).username;
    }
    translate.setDefaultLang('en');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  goto(pageName: string) {
      Observable.interval(500).take(4).subscribe(() => {
        this.stopCondition = true;
        this.router.navigate([pageName] );
      });
  }

  logout() {
    Observable.interval(500).take(4).subscribe(() => {
      this.stopCondition = true;
      this.authenticationService.logout();
    });
  }
}

