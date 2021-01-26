const Intern = require('../lib/Intern.js');

test ('Create the Intern Object.', () => {
    const intern = new Intern('Kolby Law', '001', 'klaw@test.com', 'TestSchool');
    expect(intern.name).toBe('Kolby Law');
    expect(intern.id).toBe('001');
    expect(intern.email).toBe('klaw@test.com');
    expect(intern.school).toBe('TestSchool');
});

test("Get Intern School", () => {
    const intern = new Intern('Kolby Law', '001', 'klaw@test.com', 'TestSchool');
    expect(intern.getSchool()).toEqual(expect.stringContaining('TestSchool'));
});

test("Get Intern Role", () => {
    const intern = new Intern('Kolby Law', '001', 'klaw@test.com', 'TestSchool');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});