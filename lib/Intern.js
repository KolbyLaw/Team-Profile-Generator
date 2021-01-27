// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'




// Utilize Employee Super Constructor
const Employee = require('./Employee');


// Setup Intern Constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return `School: ${this.school}`
    }

    getRole() {
        return `Intern`
    }
};


// Constructor Export
module.exports = Intern;