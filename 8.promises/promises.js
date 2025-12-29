/**
 * Learn Promises in JavaScript console
 */

//Example: 1

// let promise = new Promise((resolve, reject)=>{
//     console.log("new promise");
//     // resolve(); // PromiseState: fulfilled But PromiseResult: undefined
//     // resolve("success"); // PromiseState: fulfilled But PromiseResult: success
//     reject("Network error"); // PromiseState: rejected But PromiseResult: Network error

// });
// console.log(promise); //check in browser for state & result


//Example: 2
function promise(age) {
    return new Promise((resolve, reject) => {
        console.log("new promise");
        setTimeout(() => {
            if (!age || age < 18) {
                reject("Age Restriction"); // PromiseState: rejected But PromiseResult: Age Restriction
            } else {
                console.log("Data Fetched");
                resolve("success"); // PromiseState: fulfilled But PromiseResult: success
            }
        }, 3000)
    });
}


// ========= 

// promise(20).then((res) => {
//     console.log("Data Fetched Successfully", res);
// });

// promise(10); // browser console error
// promise(10).catch((err)=>{
//     console.log("Failed:", err);
// })




//===== Simplified // professional way to use it
promise(10).then((res) => {
    console.log("Data Fetched Successfully", res);
}).catch((err)=>{
    console.log("Failed:", err);
});