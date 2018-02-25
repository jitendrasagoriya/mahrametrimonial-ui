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

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
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
      PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
