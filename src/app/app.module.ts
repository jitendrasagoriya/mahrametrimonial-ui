import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './services/auth.service';
import { RequestInterceptorService } from './services/request-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
