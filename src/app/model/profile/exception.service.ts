import { error } from 'protractor';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Injectable()
export class ExceptionService {

  constructor(private router: Router) { }


  errorHandler(response: Response): void {
    const exception = response.json();
     if (exception.error === 'Unauthorized') {
       this.router.navigate(['login'], { queryParams: { pagename: 'search' } });
     }
   }

   errorHandlerWithPage(response: Response, pageName: String): void {
     const exception = response.json();
      if (exception.error === 'Unauthorized') {
        this.router.navigate(['login'], { queryParams: { pagename: pageName } });
      }
    }

}
