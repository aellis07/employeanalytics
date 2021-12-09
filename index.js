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

// CALLING MAINFUNC WHEN CONNECTION IS MADE
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
        break;
      case "Add role":
        // some function to add role
        break;
      case "Add employee":
        // some function to add employee
        break;
      case "View departments":
        // some function to view departments
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
