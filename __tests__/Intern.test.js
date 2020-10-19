const Intern = require('../lib/Intern');

test("create Intern object", () => {
    const intern = new Intern('Justin', '1', 'J@gmail.com', 'conUni');
    expect(intern).toEqual({
        name: 'Justin',
        id: '1',
        email: 'J@gmail.com',
        school: 'conUni',
        role: 'Intern'
    });
});
test("gets Inters's role", () => {
    const intern = new Intern('Justin', '1', 'J@gmail.com', 'conUni');
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
});
test("gets Intern's school", () => {
    const intern = new Intern('Justin', '1', 'J@gmail.com', 'conUni');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});