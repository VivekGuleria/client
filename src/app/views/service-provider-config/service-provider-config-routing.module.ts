import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRevenueShareConfigComponent } from './component/add-revenue-share-config/add-revenue-share-config.component';
import { CheckerComponent } from './component/checker/checker.component';
import { RevenueShareConfigDetailsComponent } from './component/revenue-share-config-details/revenue-share-config-details.component';
import { RevenueShareConfiguartionComponent } from './component/revenue-share-configuartion/revenue-share-configuartion.component';
import { AuditReportComponent } from './component/audit-report/audit-report.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Service Provider Configuration'
    },
    children: [
      {
        path: 'revenue-share-config',
        component: RevenueShareConfiguartionComponent,
        data: {
          title: 'Revenue Share Configuration',
        }
      },
      {
        path: 'add-revenue-share-config',
        component: AddRevenueShareConfigComponent,
        data: {
          title: 'Add Revenue Share Configuration',
        }
      },
      {
        path: 'view-revenue-share-config/:id',
        component: RevenueShareConfigDetailsComponent,
        data: {
          title: 'View Revenue Share Configuration',
        }
      },
      {
        path: 'checker',
        component: CheckerComponent,
        data: {
          title: 'Checker Revenue Share Configuration',
        }
      },
      {
        path: 'audit-report',
        component: AuditReportComponent,
        data: {
          title: 'Audit report ',
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderConfigRoutingModule { }
