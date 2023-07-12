import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceFaqRoutingModule } from './compliance-faq-routing.module';
import { ComplianceFaqComponent } from './compliance-faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    ComplianceFaqComponent
  ],
  imports: [
    CommonModule,
    ComplianceFaqRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,

  ]
})
export class ComplianceFaqModule { }
