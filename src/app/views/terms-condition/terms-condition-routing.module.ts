import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsConditionComponent } from './terms-condition.component';


const routes: Routes = [ {
  path: '',
  component: TermsConditionComponent,
  data: {
    title: 'TermsCondition'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsConditionRoutingModule { }
