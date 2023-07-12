import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgSelectModule } from '@ng-select/ng-select';

import { AlertModule } from 'ngx-bootstrap/alert';
import { SharedModule } from 'src/app/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    NgxChartsModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    BsDropdownModule,
    AlertModule.forRoot(),
    SharedModule,
    NgSelectModule
  ]
})
export class DashboardModule { }
