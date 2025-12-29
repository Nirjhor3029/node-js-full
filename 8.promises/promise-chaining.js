
function asyncFunctionForGetData(id, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!age || age < 18) {
                reject("Age Restriction!");
            }
            console.log(`Get Data for: ${id}`);
            resolve(`Data: ${id}`);
        }, 3000);
    });
}

const age = 20

// console.log("Fetching data 1...");
// let p1 = asyncFunctionForGetData(1, age);
// p1.then((res) => {
//     console.log(res);
// })
// p1.catch((err) => {
//     console.log(err);
// })



// console.log("Fetching data 2...");
// let p2 = asyncFunctionForGetData(2, age);
// p2.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// console.log("Fetching data 3...");
// asyncFunctionForGetData(3, age).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });




/**
 * now jodi ami ektar por ekta cai. ek sathe sob na cai
 * Solution: Promise Chaining 
*/
// asyncFunctionForGetData(1, age).then((res) => {
//     console.log(res);
//     asyncFunctionForGetData(2, age).then((res) => {
//         console.log(res);
//         asyncFunctionForGetData(2, age).then((res) => {
//             console.log(res);
//         });
//     });
// }).catch((err) => {
//     console.log(err);
// });


// more better way with return :: ************* promise chaining *******
asyncFunctionForGetData(1, age).then((res) => {
    console.log(res);
    return asyncFunctionForGetData(2, age);
}).then((res) => {
    console.log(res);
    return asyncFunctionForGetData(3, age);
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});





/**Loops */
// //or with the loops
// const studentIds = [101, 102, 2024, 2030];
// studentIds.forEach(studentId => {
//     console.log(`Fetching data ${studentId}...`);
//     asyncFunctionForGetData(studentId, age).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });
// });

// let chain = Promise.resolve();
// console.log(chain);
// studentIds.forEach(studentId => {
//     chain = chain.then(() => {
//         console.log(`Fetching data ${studentId}...`);
//         return asyncFunctionForGetData(studentId, age);
//     }).then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//         throw err; // chain থামানোর জন্য
//     });
// });
