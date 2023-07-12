import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsConditionRoutingModule } from './terms-condition-routing.module';
import { TermsConditionComponent } from './terms-condition.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [TermsConditionComponent],
  imports: [
    CommonModule,
    TermsConditionRoutingModule,
    NgxSpinnerModule,
FormsModule,
PdfViewerModule
  ]
})
export class TermsConditionModule { }
