import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdhocRoutingModule } from './adhoc-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdhocComponent } from './adhoc.component';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AdhocComponent],
  imports: [
    CommonModule,
    AdhocRoutingModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
   
    ModalModule.forRoot(),
  ]
})
export class AdhocModule { }
