// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'
// The other three classes will extend Employee.

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `Name: ${this.name}`
    }

    getId() {
        return `ID: ${this.id}`
    }

    getEmail() {
        return `Email: ${this.email}`
    }

    getRole() {
        return `Employee`
    }
};

module.exports = Employee;
