function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculator(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}

console.log("Addition:", calculator(10, 5, add));           // 15
console.log("Subtraction:", calculator(10, 5, subtract));