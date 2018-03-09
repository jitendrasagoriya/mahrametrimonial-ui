import { SiblingsDetailsComponent } from './component/profile/siblings-details/siblings-details.component';
import { ExceptionService } from './services/exception.service';
import { ProfileService } from './services/profile.service';
import { AuthenticationService } from './services/authentication.service';
import { PersonService } from './services/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

import { LoggerModule, NgxLoggerLevel, NGXLogger } from 'ngx-logger';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './services/auth.service';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './component/home/home.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SearchComponent } from './component/search/search.component';
import { GlobalService } from './global/global.service';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { RegisterComponent } from './component/register/register.component';
import { BasicProfileComponent } from './component/profile/basic-profile/basic-profile.component';
import { PersonalDetailComponent } from './component/profile/personal-detail/personal-detail.component';
import { BasicDetailComponent } from './component/profile/basic-detail/basic-detail.component';
import { EthnicityDetailComponent } from './component/profile/ethnicity-detail/ethnicity-detail.component';
import { BeliefsystemDetailsComponent } from './component/profile/beliefsystem-details/beliefsystem-details.component';
import { EducationComponent } from './component/profile/education/education.component';
import { CollageDetailComponent } from './component/profile/collage-detail/collage-detail.component';
import { CareerComponent } from './component/profile/career/career.component';
import { CareerDetailComponent } from './component/profile/career-detail/career-detail.component';
import { FamilyComponent } from './component/profile/family/family.component';
import { ParantDetailsComponent } from './component/profile/parant-details/parant-details.component';
import { FamilyValuesComponent } from './component/profile/family-values/family-values.component';
import { LifestyleComponent } from './component/profile/lifestyle/lifestyle.component';
import { HabitsDetailsComponent } from './component/profile/habits-details/habits-details.component';
import { AssetsDetailsComponent } from './component/profile/assets-details/assets-details.component';
import { HobbiesDetailsComponent } from './component/profile/hobbies-details/hobbies-details.component';
import { InterestDetailsComponent } from './component/profile/interest-details/interest-details.component';
import { ContactComponent } from './component/profile/contact/contact.component';
import { PartnerComponent } from './component/profile/partner/partner.component';
import { IndexComponent } from './component/index/index.component';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoadingComponent } from './component/loading/loading.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'profile/:name', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'edit', component: BasicProfileComponent, canActivate: [AuthGuardService] },
  { path: 'personal', component: PersonalDetailComponent, canActivate: [AuthGuardService] },
  { path: 'basic', component: BasicDetailComponent, canActivate: [AuthGuardService] },
  { path: 'ethnicity', component: EthnicityDetailComponent, canActivate: [AuthGuardService] },
  { path: 'belief-system', component: BeliefsystemDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'education', component: EducationComponent, canActivate: [AuthGuardService] },
  { path: 'collage', component: CollageDetailComponent, canActivate: [AuthGuardService] },
  { path: 'career', component: CareerComponent, canActivate: [AuthGuardService] },
  { path: 'careerDetail', component: CareerDetailComponent, canActivate: [AuthGuardService] },
  { path: 'family', component: FamilyComponent, canActivate: [AuthGuardService] },
  { path: 'parantDetails', component: ParantDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'siblingsDetails', component: SiblingsDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'familyValues', component: FamilyValuesComponent, canActivate: [AuthGuardService] },
  { path: 'lifestyle', component: LifestyleComponent, canActivate: [AuthGuardService] },
  { path: 'habits', component: HabitsDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'assets', component: AssetsDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'hobbies', component: HobbiesDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'interest', component: InterestDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService] },
  { path: 'partner', component: PartnerComponent, canActivate: [AuthGuardService] },
  { path: 'index', component: IndexComponent, canActivate: [AuthGuardService] },


  { path: 'help', component: LoadingComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: '**', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SearchComponent,
    EditProfileComponent,
    RegisterComponent,
    BasicProfileComponent,
    PersonalDetailComponent,
    BasicDetailComponent,
    EthnicityDetailComponent,
    BeliefsystemDetailsComponent,
    EducationComponent,
    CollageDetailComponent,
    CareerComponent,
    CareerDetailComponent,
    FamilyComponent,
    ParantDetailsComponent,
    SiblingsDetailsComponent,
    FamilyValuesComponent,
    LifestyleComponent,
    HabitsDetailsComponent,
    AssetsDetailsComponent,
    HobbiesDetailsComponent,
    InterestDetailsComponent,
    ContactComponent,
    PartnerComponent,
    IndexComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule ,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.INFO, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
      AuthService,
      PersonService,
      AuthGuardService,
      AuthenticationService,
      PersonService,
      ProfileService,
      GlobalService,
      ExceptionService,
      LoadingComponent,
      NGXLogger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

