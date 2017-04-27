"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    // tslint:disable-next-line:typedef
    InMemoryDataService.prototype.createDb = function () {
        // tslint:disable-next-line:typedef
        var employees = [
            { id: 211, name: "Erik", worktime: "35h", salary: "32k", position: "senior software engineer" },
            { id: 212, name: "Sofia", worktime: "30h", salary: "20k", position: "junior software engineer" },
            { id: 213, name: "Daniel", worktime: "40h", salary: "32k", position: "testing engineer" },
            { id: 214, name: "Olivia", worktime: "30h", salary: "22k", position: "HR" },
            { id: 215, name: "Oscar", worktime: "40h", salary: "35k", position: "UI designer" },
            { id: 216, name: "Astrid", worktime: "35h", salary: "31k", position: "project manager" },
            { id: 217, name: "Anna", worktime: "30h", salary: "35k", position: "senior system developer" },
            { id: 218, name: "Max", worktime: "15h", salary: "12k", position: "intern" },
            { id: 219, name: "Anton", worktime: "30h", salary: "30k", position: "senior software engineer" },
            { id: 220, name: "Linn", worktime: "40h", salary: "35k", position: "UI designer" },
            { id: 221, name: "Sandra", worktime: "40h", salary: "31k", position: "system developer" },
            { id: 222, name: "Sara", worktime: "30h", salary: "20k", position: "Intern" },
            { id: 223, name: "Alexander", worktime: "15h", salary: "12k", position: "intern" },
            { id: 224, name: "Viktor", worktime: "30h", salary: "32k", position: "senior software engineer" },
            { id: 225, name: "Olle", worktime: "40h", salary: "45k", position: "CTO" }
        ];
        return { employees: employees };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map