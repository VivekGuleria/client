import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdhocComponent } from './adhoc.component';


const routes: Routes = [  {
  path: '',
  component: AdhocComponent,
  data: {
    title: 'adhoc'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdhocRoutingModule { }
