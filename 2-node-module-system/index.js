console.log("Module practice");

const firstModule = require('./first-module');

// console.log(firstModule.add(2,3));

console.log(firstModule.name);
console.log(firstModule.add(2,3));


try {
    console.log("Trying to divide by zero");
    const result = firstModule.divide(10,0);
    console.log(result);
    
    
} catch (error) {
    console.error(`Caught And Error: ${error.message}`);
    
}

// console.log(__filename);
// console.log(__dirname);

firstModule.greet("Nirjhor");
firstModule.age(25);



// console.log(firstModule.divide(3,0));



