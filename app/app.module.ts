import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }            from './app.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent }      from './employees.component';
import { EmployeeService }         from './employee.service';
import { DashboardComponent }      from './dashboard.component';
import { RecruitingComponent }     from './recruiting.component';
import { EmployeeSearchComponent } from './employee-search.component';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
      BrowserModule, 
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
  ],
  declarations: [
     AppComponent, 
     EmployeeDetailComponent,
     EmployeesComponent,
     EmployeeSearchComponent,
     DashboardComponent,
     RecruitingComponent
     ],
  
  providers:[
      EmployeeService
  ],

  bootstrap: [ AppComponent ]
})



export class AppModule { }
