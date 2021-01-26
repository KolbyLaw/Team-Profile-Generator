const Engineer = require('../lib/Engineer.js')

test('Create the Engineer Object.', () => {
    const engineer = new Engineer ('Kolby Law', '001', 'klaw@test.com', 'kolbylaw')
    
    expect(engineer.name).toBe('Kolby Law');
    expect(engineer.id).toBe('001');
    expect(engineer.email).toBe('klaw@test.com');
    expect(engineer.github).toBe('kolbylaw');
});

test ("Get Engineer GitHub Profile.", () => {
    const engineer = new Engineer ('Kolby Law', '001', 'klaw@test.com', 'kolbylaw')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('kolbylaw'));
});

test("Get Engineer Role.", () => {
    const engineer = new Engineer ('Kolby Law', '001', 'klaw@test.com', 'kolbylaw')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});