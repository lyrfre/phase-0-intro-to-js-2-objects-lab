// Write your solution in this file!
const employee = {
    name : `Lyra`,
    streetAddress : `1289 Dean St.`
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
     const newEmployees = {...employee}
     newEmployees[key] = value
     return newEmployees
}

//console.log(updateEmployeeWithKeyAndValue(employee, `bob`, `Denver`))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value 
    return employee
}

//console.log(destructivelyUpdateEmployeeWithKeyAndValue('Bob', 'address', 'nyc'))

function deleteFromEmployeeByKey(employee, key) {
    const newEmployees = {...employee}
    delete newEmployees[key]
    return newEmployees
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}