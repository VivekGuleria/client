import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionDetailsComponent } from './component/transaction-details/transaction-details.component';
import { TransactionsComponent } from './component/transactions/transactions.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'transaction'
    },
    children: [
      {
        path: 'sale',
        component: TransactionsComponent,
        data: {
          title: 'sale',
        }
      },
      {
        path: 'refund',
        component: TransactionsComponent,
        data: {
          title: 'refund',
        }
      },
      {
        path: 'void',
        component: TransactionsComponent,
        data: {
          title: 'void',
        }
      },
      {
        path: 'pre-auth',
        component: TransactionsComponent,
        data: {
          title: 'pre-auth',
        }
      },
      {
        path: 'auth-completion',
        component: TransactionsComponent,
        data: {
          title: 'auth-completion',
        }
      },
      {
        path: 'disputes',
        component: TransactionsComponent,
        data: {
          title: 'disputes',
        }
      },
      {
        path: ':txnType/:txnId',
        component: TransactionDetailsComponent,
        data: {
          title: 'transaction-details',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
