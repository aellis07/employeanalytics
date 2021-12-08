const { response } = require("express");
const inquirer = require("inquirer");
require("console.table");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "codingcrazy",
  database: "company_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connection listening");
});
