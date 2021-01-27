// Link to Testing File
const Manager = require('../lib/Manager.js');


// File Tests
test('Create the Manager Object.', () => {
    const manager = new Manager('Kolby Law', '001', 'klaw@test.com', '002');
    
    expect(manager.name).toBe('Kolby Law');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('klaw@test.com');
    expect(manager.officeNumber).toBe('002');
});

test("Get Manager Role", () => {
    const manager = new Manager('Kolby Law', '001', 'klaw@test.com', '002');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});