const Employee = require('../lib/Employee')

test('creates Employee object', () => {
    const employee = new Employee('justin', '1', "j@gmail.com")

    expect(employee).toEqual({
        name: 'justin',
        id: '1',
        email: 'j@gmail.com',
        role: 'Employee',

    });
})

test("gets Employee's name", () => {
    const employee = new Employee('justin', '1', "j@gmail.com")
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()))
})

test("get's Employee's id", () => {
    const employee = new Employee('Justin', '1', 'j@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets Employee's email", () => {
    const employee = new Employee('Justin', '1', 'J@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test("gets Employee's role", () => {
    const employee = new Employee('Justin', '1', 'J@gmail.com');
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
});