import { ProfileService } from './services/profile.service';
import { AuthenticationService } from './services/authentication.service';
import { PersonService } from './services/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuardService] },
  { path: 'edit', component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent  },
  { path: '**', component: LoginComponent }
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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule,
    HttpModule
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
      GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
