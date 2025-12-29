/**
 * callback-hell solved by promises and async await
 */

function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data: " + id);
            resolve(200); // very important
        }, 2000);
    })
}

// async function run() {
//     console.log("Getting Data1...");
//     await getData(1);
//     console.log("Getting Data2...");
//     await getData(2);
//     console.log("Getting Data3...");
//     await getData(3);
//     console.log("Getting Data4...");
//     await getData(4);
//     console.log("Getting Data5...");
//     await getData(5);
// }

// run();

/**
 * IIFE : Immediately Invoked Function Expression
 * (function)();
 */




(async () => {
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
    console.log("Getting Data4...");
    await getData(4);
    console.log("Getting Data5...");
    await getData(5);
})();