import { Router } from '@angular/router';
import { ProfileService } from './../services/profile.service';
import { LoadingComponent } from './loading/loading.component';
import { BuilderService } from './../services/builder.service';
import { GlobalService } from './../global/global.service';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Location } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class ProfileBase {

    public location: Location;
    public global = new GlobalService();
    public builder = new BuilderService();
    public loadingComponent = new LoadingComponent();
    public profileService: ProfileService;
    public error: String;
    public router: Router;
    public isSuccess: Boolean = false;

    constructor() { }

    setprofileService(profileService: ProfileService) {
        this.profileService = profileService;
    }

    setLocation(location: Location) {
        this.location = location;
    }

    setRouter(router: Router) {
        this.router = router;
    }

    updateProfile(pName: String, pValue: String, id: String): any {
        this.loadingComponent.show();
        this.profileService.changeProfile(this.global.convertIntoJson(pName, pValue, id) )
        .subscribe(result => {
                if (result === true) {
                    this.loadingComponent.hide();
                    this.isSuccess = true;
                } else {
                    this.error = 'Something went wrong. Please try after some time';
                    this.loadingComponent.hide();
                    this.isSuccess = false;
                }
        }, error => {
          if (error.error === 'Unauthorized') {
             this.error = 'Username or password is incorrect';
             this.isSuccess = false;
          }
          this.loadingComponent.hide();
        });
    }
}
