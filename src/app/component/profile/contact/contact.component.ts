import { ProfileBase } from './../../profileBase';
import { Contact } from './../../../model/contact';
import { BuilderService } from './../../../services/builder.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends ProfileBase  implements OnInit {

  public contact: Contact;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
      private profileServiceTemp: ProfileService
    , private locationTemp: Location , private tempRouter: Router) {

      super();
      this.setprofileService(profileServiceTemp);
      this.setLocation(locationTemp);
      this.setRouter(tempRouter);
    }

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

  _updateEmail() {
    this.updateProfile('email', this.contact.email, null );
  }

   _updateAddress() {
    this.updateProfile('address', this.contact.address, null );
  }

  _updateMobile() {
    this.updateProfile('primeryContactNo', this.contact.mobileNumber.toString(), null );
  }

  _updateSecoundryContactNo() {
    this.updateProfile('secoundryContactNo', this.contact.mobileNumber2.toString(), null );
  }
  
  _updateLandLineNumber() {
    this.updateProfile('landLineNumber', this.contact.landline.toString(), null );
  }  
   
}
