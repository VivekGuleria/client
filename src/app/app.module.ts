import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { P404Component } from './views/error/p404.component';
import { P500Component } from './views/error/p500.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { GeneratePasswordComponent } from './views/generate-password/generate-password.component';
import { DefaultLayoutComponent } from './containers';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
// import { LedgerModule } from './views/ledger/ledger.module';
 import {NgxCaptchaModule,} from '@binssoft/ngx-captcha';



const APP_CONTAINERS = [DefaultLayoutComponent];
const APP_CONTAINERS2 = [DefaultComponent];


import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimeoutserviceService } from './services/timeoutservice.service';
import { DefaultComponent } from './shared';
import { AlertModule } from 'ngx-bootstrap/alert';
import { Angular2CsvModule } from 'angular2-csv';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AppInitService } from './services/app-init.service';
import { TimeAgo } from './pipes/timeago.pipe';
import { NgxMaskModule } from 'ngx-mask';
// import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    P404Component,
    P500Component,
    ...APP_CONTAINERS,
    ...APP_CONTAINERS2,
    ForgotPasswordComponent,
    GeneratePasswordComponent,
    TimeAgo,
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      maxOpened: 1,
      timeOut: 3000,
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Angular2CsvModule,
    AlertModule.forRoot(),
    NgxSpinnerModule,
    ModalModule,
    NgxMaskModule.forRoot(),
    NgxCaptchaModule
   
  ],
  providers: [
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy,
    //   multi:true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
 
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (appInit: AppInitService) => () => appInit.loadConfiguration().toPromise(),
    //   multi: true
    // },
    TimeoutserviceService,
    BsModalService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
