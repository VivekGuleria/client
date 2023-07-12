import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplianceFaqComponent } from './compliance-faq.component';


const routes: Routes = [
  {
    path: '',
    component: ComplianceFaqComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceFaqRoutingModule { }
