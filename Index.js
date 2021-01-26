// General
const inquirer = require('inquirer');

// Src Files
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')

// Lib Files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};


// Employee QA Prompt
function Prompt() {
    
    return inquirer
        .prompt([
        {
            type:'text',
            name: 'employee',
            message: "Please enter the employee's name:"
        },
        {
            type: 'list',
            name: 'role',
            message:"Please select the employee's role:",
            choices: ['Manager', 'Engineer', 'Intern']
        },

        {
            type:'text',
            name: 'id',
            message: "Please enter the employee's ID:"
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter the employee's email:"
        }])

        // Additional QA based on Employee Role
        .then(({employee, id, email, role}) => {

            // If Role is Manager
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"Please enter the manager's office number:"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({office, anotherEntry}) => {
                        manager.push(new Manager(employee, id, email, office))
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })

            // If Role is Engineer
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "Please enter the employee's GitHub username:"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({github, anotherEntry}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })

            // If Role is Intern
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "Please enter the name of the school that the intern is attending:"
                    },
                    {
                        type:'confirm',
                        name:'anotherEntry',
                        message: "Would you like to add another employee?",
                        default: false
                    }])
                    .then(({school, anotherEntry}) => {
                        intern.push(new Intern(employee, id, email, school))
                        if (anotherEntry) {
                            return Prompt();
                        }
                    })
            }
        })
};



Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })