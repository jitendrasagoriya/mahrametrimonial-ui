import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-basic-profile',
  templateUrl: './basic-profile.component.html',
  styleUrls: ['./basic-profile.component.css']
})
export class BasicProfileComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private logger: NGXLogger) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params['load']) {
        this.logger.info('Refresh');
        document.getElementById('farji-overlay').remove();
      }
   });
  }

  redirect(redirect: string) {
    this.router.navigate(['education']);
  }

  goBack() {
    this.location.back();
  }

}
