import { GlobalService } from './../../../global/global.service';
import { BuilderService } from './../../../services/builder.service';
import { BasicDetail } from './../../../model/profile/basicDetail';
import { LoadingComponent } from './../../loading/loading.component';
import { Person } from './../../../model/person';
import { Profile } from './../../../model/profile';
import { PersonService } from './../../../services/person.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-basic-profile',
  templateUrl: './basic-profile.component.html',
  styleUrls: ['./basic-profile.component.css']
})
export class BasicProfileComponent implements OnInit, OnDestroy {

    private basicDetail: BasicDetail;
    public isMehra: Boolean;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private logger: NGXLogger,
    private personService: PersonService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private loading: LoadingComponent,
    private builderService: BuilderService,
    private global: GlobalService  ) { }

  ngOnInit() {

    this.isMehra = this.global.isMehra;
    this.loading.show();
    this.route.params.subscribe( params => {
      if (params['load']) {
        this.logger.info('Refresh');
        document.getElementById('farji-overlay').remove();
      }
   });

   this.personService.getPerson().subscribe( (person: Person) => {
      this.storage.set('person', person);
      this.loading.hide();
   });

  }

  ngOnDestroy() {

  }

  redirect(redirect: string) {
    this.router.navigate(['education']);
  }

  goBack() {
    this.location.back();
  }

}
