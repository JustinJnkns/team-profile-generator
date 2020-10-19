const Manager = require('../lib/Manager');

test('create a Manager object', () => {
    const manager = new Manager('Justin', '1', 'J@gmail.com', '12345678910');
    expect(manager).toEqual({
        name: 'Justin',
        id: '1',
        email: 'J@gmail.com',
        officeNumber: '12345678910',
        role: 'Manager'
    });
});
test("gets Manager's role", () => {
    const manager = new Manager('Justin', '1', 'J@gmail.com', '12345678910');
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
});
test("gets Managers's office number", () => {
    const manager = new Manager('Justin', '1', 'J@gmail.com', '12345678910');
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});