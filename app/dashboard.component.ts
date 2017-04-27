import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {
        // 创建一个 employees 数组属性
        employees: Employee[] = [];    

        // EmployeeService 注入构造函数中，并且把它保存在一个私有的 employeeService 字段中。
        constructor(private employeeService: EmployeeService) { }   

        //在 Angular 的 ngOnInit 生命周期钩子里面调用服务来获得employee列表。
        ngOnInit(): void {
            this.employeeService.getEmployees()
            // set three employees (6th, 7th, 8th) to be the top employees through "Arrar.slice" method.
            .then(employees => this.employees = employees.slice(2, 4));

        }

 }
