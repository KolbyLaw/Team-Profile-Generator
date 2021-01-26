const Employee = require('../lib/Employee.js');

test('Create the Employee Object.', () => {
    const employee = new Employee('Kolby Law', '001', 'klaw@test.com');

    expect(employee.name).toBe('Kolby Law');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('klaw@test.com');
});

test("Get Employee Name.", () => {
    const employee = new Employee('Kolby Law', '001', 'klaw@test.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Kolby Law'));
});

test("Get Employee ID.", () => {
    const employee = new Employee('Kolby Law', '001', 'klaw@test.com');

    expect(employee.getId()).toEqual(expect.stringContaining('001'));
});

test("Get Employee Email.", () => {
    const employee = new Employee('Kolby Law', '001', 'klaw@test.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('klaw@test.com'));
});

test("Get Employee Role.", () => {
    const employee = new Employee('Kolby Law', '001', 'klaw@test.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});