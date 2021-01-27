// General
const inquirer = require('inquirer');

// Src File(s)
const writeFile = require('./utils/generate-site')

// Util File(s)
const generatePage = require('./src/page-template');

// Lib Files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let manager = [];
let engineer = [];
let intern = [];

let teamArr = {manager, engineer, intern};


// Employee QA Prompt Function
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
                        default: true
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
                        default: true
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
                        default: true
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


// Run QA Prompt, Generate Page Info, Write To File
Prompt()
    .then(() => {
        return generatePage(teamArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })