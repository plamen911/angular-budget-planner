## Final Project for the Angular Fundamentals – November 2017@SoftUni course

Demo url: https://plamen911.github.io

Angular client repo: https://github.com/plamen911/angular-budget-planner

Node.js server repo: https://github.com/plamen911/nodejs-test-server

## Brief documentation

This is a personal budget planner web application with Angular that only works for registered users. The user can view and modify monthly budget, add and delete expenses, and see a yearly summary. The application uses custom [Node.js service](https://plamen.thewebdesignco.com/) as back-end, deployed on [DigitalOcean](https://www.digitalocean.com/).

### Public Part

The public part of the projects are the user login and user registration forms.

<img src="http://lynxlake.org/plamen/test/angular-budget-planner/IMG_1515.PNG" alt="Login" height="400" /> <img src="http://lynxlake.org/plamen/test/angular-budget-planner/IMG_1516.PNG" alt="Register" height="400" />

### Private Part (User Area)

Registered users have personal area in the web application accessible after successful login.

<img src="http://lynxlake.org/plamen/test/angular-budget-planner/IMG_1517.PNG" alt="Planner Form" height="400" /> <img src="http://lynxlake.org/plamen/test/angular-budget-planner/IMG_1518.PNG" alt="Expense Form" height="400" /> <img src="http://lynxlake.org/plamen/test/angular-budget-planner/IMG_1519.PNG" alt="Yearly Balance" height="400" />

### Administration Part

System administrator (email: admin@abv.bg password: admin) have administrative access to the system and permissions to view / create / delete other users.

<img src="http://lynxlake.org/plamen/test/angular-budget-planner/IMG_1520.PNG" alt="User List" height="400" /> <img src="http://lynxlake.org/plamen/test/angular-budget-planner/IMG_1521.PNG" alt="User Form" height="400" />

## Deploying an Angular App to Github Pages

https://pages.github.com/

```
ng build --prod --base-href "https://plamen911.github.io/"
```

https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04


