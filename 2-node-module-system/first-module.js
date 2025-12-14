
const name = "Nirjhor";


function add(a, b) {
    return a + b;
}

function substruct(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b==0) {
        throw new Error("Divided by zero is not allowed!!")
    }

    return a / b;
}

module.exports = {
    add, substruct, multiply, divide, name
}

module.exports.greet = function(name) {
    console.log(`Hello ${name} from the first module`);
}

module.exports.age = function(age) {
    console.log(`You are ${age} years old`);
}