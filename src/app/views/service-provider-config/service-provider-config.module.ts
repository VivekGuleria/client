import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderConfigRoutingModule } from './service-provider-config-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../../shared.module';
import { RevenueShareConfiguartionComponent } from './component/revenue-share-configuartion/revenue-share-configuartion.component';
import { RevenueShareConfiguartionCheckerComponent } from './component/revenue-share-configuartion-checker/revenue-share-configuartion-checker.component';
import { DataFilterPipe } from './pipes/dataFilterPipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddRevenueShareConfigComponent } from './component/add-revenue-share-config/add-revenue-share-config.component';
import { RevenueShareConfigDetailsComponent } from './component/revenue-share-config-details/revenue-share-config-details.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { EditRevenueShareConfigComponent } from './component/edit-revenue-share-config/edit-revenue-share-config.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { CheckerComponent } from './component/checker/checker.component';
import { AuditReportComponent } from './component/audit-report/audit-report.component';

@NgModule({
  declarations: [RevenueShareConfiguartionComponent, RevenueShareConfiguartionCheckerComponent, DataFilterPipe, AddRevenueShareConfigComponent, RevenueShareConfigDetailsComponent, EditRevenueShareConfigComponent, CheckerComponent, AuditReportComponent],
  imports: [
    CommonModule,
    ServiceProviderConfigRoutingModule,
    NgxPaginationModule,
    SharedModule,
    BsDropdownModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [BsModalService]
})
export class ServiceProviderConfigModule { }
