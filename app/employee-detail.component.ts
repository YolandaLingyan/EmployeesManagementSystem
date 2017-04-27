import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  moduleId: module.id,
  selector: 'my-employee-detail',
  templateUrl: 'employee-detail.component.html',
  styleUrls: [ 'employee-detail.component.css' ]


})
export class EmployeeDetailComponent implements OnInit {
    employee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.employeeService.getEmployee(id)
            .then(employee => this.employee = employee);
        });
    }

    save(): void {
        this.employeeService.update(this.employee)
            .then(() => this.goBack());
    }


     goBack(): void {
        this.location.back();
     }

}
