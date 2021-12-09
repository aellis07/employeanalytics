// DEPENDENCIES
const { response } = require("express");
const inquirer = require("inquirer");
require("console.table");
const mysql = require("mysql");

// CREATING MYSQL-JS CONNCECTION
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "codingcrazy",
  database: "company_db",
});

// CALLING mainFunc(); WHEN CONNECTION IS MADE
connection.connect((err) => {
  if (err) throw err;
  console.log("Connection listening");
  mainFunc();
});
// MAIN USER PROMPT
const mainPrompt = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add department",
      "Add role",
      "Add employee",
      "View departments",
      "View roles",
      "View employees",
      "Update employee role",
      "Quit",
    ],
    name: "userchoice",
  },
];

// MAIN FUNCTION
function mainFunc() {
  inquirer.prompt(mainPrompt).then((response) => {
    switch (response.userchoice) {
      case "Add department":
        // some function to add department
        newDepartment();
        break;
      case "Add role":
        // some function to add role
        newRole();
        break;
      case "Add employee":
        // some function to add employee
        newEmployee();
        break;
      case "View departments":
        // some function to view departments
        viewDepartment();
        break;
      case "View roles":
        // some function to view roles
        break;
      case "View employee":
        // some function to view employees
        break;
      case "Update employee role":
        // some function to update employees role
        break;
    }
  });
}

function newDepartment() {
  console.log("You selected: Add new department");
  inquirer
    .prompt({
      type: "input",
      message: "What is the department name?",
      name: "departmentName",
    })
    .then((response) => {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [response.departmentName],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          mainFunc();
        }
      );
    });
}

function newRole() {
  console.log("You selected: Add new role");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary",
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "departmentID",
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [response.roleName, response.salary, response.departmentID],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          mainFunc();
        }
      );
    });
}

function newEmployee() {
  console.log("You selected: Add new employee");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID",
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID",
      },
    ])
    .then((response) => {
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          response.firstName,
          response.lastName,
          response.roleID,
          response.managerID,
        ],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          mainFunc();
        }
      );
    });
}

function viewDepartment() {
  console.log("You selected: View department");
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    mainFunc();
  });
}
