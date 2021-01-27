// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'




// Utilize Employee Super Constructor
const Employee = require('./Employee');


// Setup Manager Constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
};


// Constructor Export
module.exports = Manager;