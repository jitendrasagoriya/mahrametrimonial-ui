import { Contact } from './../../../model/contact';
import { BuilderService } from './../../../services/builder.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: Contact;

  constructor(private router: Router, private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private builder: BuilderService) { }

  ngOnInit() {
    if (this.storage.get('person') != null) {
      this.contact = this.builder.buildContact( this.storage.get('person') );
    }
  }

  redirect(redirect: string) {
    this.router.navigate([redirect]);
  }

  goBack() {
    this.location.back();
  }

}
