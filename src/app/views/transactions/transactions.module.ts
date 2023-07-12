import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { TransactionDetailsComponent } from './component/transaction-details/transaction-details.component';
import { TransactionHistoryComponent } from './component/transaction-history/transaction-history.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../../shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [TransactionsComponent, TransactionDetailsComponent, TransactionHistoryComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    NgxPaginationModule,
    SharedModule,
    BsDropdownModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot(),
    ModalModule.forRoot(),
    NgSelectModule
  ],
  providers: [BsModalService]
})
export class TransactionsModule { }
