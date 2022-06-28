// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "101 Real Street",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj1 = {...obj};
    newObj1[key] = value;

    return newObj1;

}
const employee2 = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Steve",
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj
}
const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Patrick");

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj2 = {...obj};
    newObj2[key] = value;

    return newObj2;
}
const employee4 = deleteFromEmployeeByKey(employee, "name", "")


function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value
    return obj

}
const employee5 = destructivelyDeleteFromEmployeeByKey(employee, "name", "");

