import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent }      from './employees.component';
import { DashboardComponent }      from './dashboard.component';
import { RecruitingComponent }      from './recruiting.component';

 const routes: Routes =[
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: EmployeeDetailComponent
      },
      {
        path: 'recruiting',
        component: RecruitingComponent
      }
    ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
    
}