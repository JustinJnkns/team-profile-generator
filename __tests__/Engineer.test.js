const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Justin', '1', 'j@gmail.com', 'justinjnkns');
    expect(engineer).toEqual({
        name: 'Justin',
        id: '1',
        email: 'j@gmail.com',
        role: 'Engineer',
        github: 'justinjnkns'
    });
});
test("gets github username", () => {
    const engineer = new Engineer('Justin', '1', 'j@gmail.com', 'justinjnkns');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test("gets Engineer role", () => {
    const engineer = new Engineer('Justin', '1', 'j@gmail.com', 'justinjnkns');
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
});