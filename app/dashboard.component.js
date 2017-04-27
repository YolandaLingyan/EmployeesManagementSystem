"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require('./employee.service');
var DashboardComponent = (function () {
    // EmployeeService 注入构造函数中，并且把它保存在一个私有的 employeeService 字段中。
    function DashboardComponent(employeeService) {
        this.employeeService = employeeService;
        // 创建一个 employees 数组属性
        this.employees = [];
    }
    //在 Angular 的 ngOnInit 生命周期钩子里面调用服务来获得employee列表。
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .then(function (employees) { return _this.employees = employees.slice(2, 4); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map