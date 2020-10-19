function Employee(name, id, email) {
    this.name = name
    this.id = id
    this.role = 'Employee'
    this.email = email
}

Employee.prototype.getName = function() {
    return this.name
}
Employee.prototype.getId = function() {
    return this.id
}
Employee.prototype.getEmail = function() {
    return this.email
}
Employee.prototype.getRole = function() {
    return this.role
}

module.exports = Employee