import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './guards/auth.guard';

import { P404Component } from './views/error/p404.component';
import { P500Component } from './views/error/p500.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { GeneratePasswordComponent } from './views/generate-password/generate-password.component';
import { Role } from './models';
import { RoleAccess } from './models';
import { DefaultComponent } from './shared/default/default.component';
// import { SettlementsComponent } from './views/settlements/settlements/settlements.component';






export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  // {
  //   path: 'loginn',
  //   component: LoginnComponent,
  //   data: {
  //     title: 'Loginn Page',
  //   },
  // },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password Page',
    },
  },
  {
    path: 'generate-password/:token',
    component: GeneratePasswordComponent,
    data: {
      title: 'Generate Password Page',
    },
  },
  {
    path: '',
    component: DefaultComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'termsCondition',
        loadChildren: () => import('./views/terms-condition/terms-condition.module').then(m => m.TermsConditionModule)
      },
      {
        path: 'compliance-faq',
        loadChildren: () => import('./views/compliance-faq/compliance-faq.module').then(m => m.ComplianceFaqModule)
      },
      {
        path: 'adhoc',
        loadChildren: () => import('./views/adhoc/adhoc.module').then(m => m.AdhocModule)
      },
      {
        path: 'term-of-use',
        loadChildren: () => import('./views/term-of-use/term-of-use.module').then(m => m.TermOfUseModule)
      },
 
    ]
  },


  { path: '**', component: P404Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
