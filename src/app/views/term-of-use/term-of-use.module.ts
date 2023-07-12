import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermOfUseRoutingModule } from './term-of-use-routing.module';
import { TermOfUseComponent } from './term-of-use.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TermOfUseComponent],
  imports: [
    CommonModule,
    TermOfUseRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    PdfViewerModule
  ]
})
export class TermOfUseModule { }
