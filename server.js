const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./db/connections');
const { viewDept, viewRole, viewEmp, addDept, addRole, addEmp, updateRole } = require('./db/index')



// connection.connect((err) => {
//     if (err) throw err;
//     begin()
// });

// connect to db
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: 'password',
//       database: 'employees_db'
//     }
// );
// function to run once connection is made, show prompt selections
function begin() {
    inquirer.prompt ([{
        type: "list",
        name: "main",
        message: "Hello! Welcome to The Office Employee Tracker. Please select from the options below.",
        type: "list",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit"
        ]
    }])
    // switch case through all choices and run function, imported from index.js in db folder
    .then((answer) => {
        questions(answer);
    });
}
begin();

async function questions(answer) {
    switch(answer.main) {
        case "View all departments" : {
            viewDept()
            .then((results) => {
                console.log("---------------------");
                console.log("All Departments:")
                console.log("---------------------");
                console.table(results[0])
                begin()    
            });
            break;
        }
        case "View all roles" : {
            viewRole()
            .then((results) => {
                console.log("---------------------");
                console.log("All Roles:")
                console.log("---------------------");
                console.table(results[0]);
                begin()    
            });
            break;
        }
        case "View all employees" : {
            viewEmp()
            .then((results) => {
                console.log("---------------------");
                console.log("All Employees:")
                console.log("---------------------");
                console.table(results[0]);
                begin()    
            });
            break;
        }
        case "Add a department" : {
            addDept()
            .then((results) => {
                console.log("---------------------");
                console.log("New Department Added:")
                console.log("---------------------");
                console.table(results[0])
                begin()    
            });
            break;
        }
        case "Add a role" : {
            addRole()
            .then((results) => {
                console.log("---------------------");
                console.log("New Role Added:")
                console.log("---------------------");
                console.table(results[0])
                begin()    
            });
            break;
        }
        case "Add an employee" : {
            addEmp()
            .then((results) => {
                console.log("---------------------");
                console.log("New Employee Added:")
                console.log("---------------------");
                console.table(results[0])
                begin()    
            });
            break;
        }
        case "Update an employee role" : {
            updateRole()
            .then((results) => {
                console.log("---------------------");
                console.log("Role Updated:")
                console.log("---------------------");
                console.table(results[0])
                begin()    
            });
            break;
        }
        case "Exit" : {
            process.exit();
        }
    }
}

module.exports = begin;