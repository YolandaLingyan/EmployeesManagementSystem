# Employees Management System
This demo is a employees management system build by following official Angular 2 tutorial "TourOfHeroes".

## Run this project locally
```
npm install
npm start
```
### If you meet these errors when you run  `npm start`
```
error This is most likely a problem with the angular2-quickstart package,
error not with npm itself.
error Tell the author that this fails on your system:
error     concurrent "npm run tsc:w" "npm run lite"
error You can get their info via:
error     npm owner ls angular2-quickstart
```
Update your dependencies at package.json.
Check more help info [here](https://stackoverflow.com/questions/34335340/angular2-quickstart-npm-start-is-not-working-correctly).

Change the `start` field in package.json
```
"start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",
```

### In this system, user can use the dashboard to:
  - check who're the outstanding employees this month;
    - search employee by name;
  - access all the employees information:
    - delete employee;
    - check someone's detail;
    - edit the employee's info (can only change the employee's name now)
  - edit the recruiting info.

### Something wait for implementation:
  - edit the details of employee (for example worktime, salary, positon);
  - add more search methods (use "search by name" now) like search by id, position, salary etc;
  - add content to the recruit branch

