
// function logInfo(info) {
//     console.log("Person Info:", info);
// }

// function person(name, age, callback) {
//     const personInfo = {
//         name: name,
//         age: age,
//     };
//     callback(personInfo);
// }

// person("Alice", 30, function(info) {
//     console.log("Person Info:", info);
// });

// person("Bob", 25, logInfo);
// person("Nirjhor", 31, logInfo);


/**
 * 
 * Calculator function that takes two numbers and 
 * a callback to perform an operation
 */
// function calculator(num1, num2, operationCallback) {
//     return operationCallback(num1, num2);
// }

// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// function divide(num1, num2) {
//     return num1 / num2;
// }
// console.log("Addition:", calculator(10, 5, add));           // 15
// console.log("Subtraction:", calculator(10, 5, subtract));    // 5
// console.log("Multiplication:", calculator(10, 5, multiply)); // 50
// console.log("Division:", calculator(10, 5, divide));         // 2   
// console.log("Modulus:", calculator(10, 5, function (num1, num2) {
//     return num1 % num2;
// })); // 0
// console.log("Exponentiation:", calculator(2, 3, (num1, num2) => {
//     return Math.pow(num1, num2);
// })); // 8




/**
 * Real World Example 
 * Async Callbacks: Fetching data from a server
 * 
 * */

// function fetchDataFromServer(url, callback) {
//     console.log(`Fetching data from ${url}...`);
//     setTimeout(() => {
//         const data = { id: 1, name: "Sample Data" }; // Simulated data
//         callback(data);
//     }, 2000);
// }

// fetchDataFromServer("https://api.example.com/data", (data) => {
//     console.log("Data received from server:", data);

//     // Further processing with another callback
//     processData(data, (processedData) => {
//         console.log("Processed Data:", processedData);
//     });
// });

// function processData(data, callback) {
//     console.log("Processing data...");
//     setTimeout(() => {
//         const processedData = { ...data, processed: true }; // Simulated processing
//         callback(processedData);
//     }, 1000);
// }

// fetchDataFromServer("https://api.example.com/data", (data) => {
//     console.log("Data received from server:", data);

//     // Further processing with another callback
//     processData(data, (processedData) => {
//         console.log("Processed Data:", processedData);
//     })
// });


/** 
 *  File System Operations with Callbacks
 * 
 * */
const fs = require('fs');

fs.readFile('nonexistentfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File content:", data);
});

// OR 


// Callback Function
function handleFileRead(err, data) {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File content:", data);
}

fs.readFile('nonexistentfile.txt', 'utf8', handleFileRead);
