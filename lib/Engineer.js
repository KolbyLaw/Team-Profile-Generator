// In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'




// Utilize Employee Super Constructor
const Employee = require('./Employee');


// Setup Engineer Constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return `GitHub: ${this.github}`
    }
    
    getRole() {
        return `Engineer`
    }
};


// Constructor Export
module.exports = Engineer;