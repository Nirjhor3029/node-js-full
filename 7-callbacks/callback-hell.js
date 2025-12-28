// console.log("callback hell");
// const fs = require('fs');
// const fileName = "data.txt";

// // fs.writeFileSync(fileName,"hello world!");

// fs.readFile(fileName, 'utf-8', (err, data) => {
//     // console.log(data);
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//     fs.appendFile(fileName, "\n this is new line", () => {
//         fs.readFile(fileName, "utf-8", (err, data) => {
//             if (err) {
//                 console.log("Error:", err);
//                 return;
//             }
//             console.log(data);
//         })
//     })
// });



/**
 * Real World Example
 */

// function getData(id, getNextData = null) {
//     setTimeout(() => {
//         console.log("Data: " + id);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5)
//             })
//         });
//     });
// });




/**
 * solution by promises + async & await
 */


function getData(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data: " + id);
            resolve(); // ✅ very important
        }, 2000);
    })
}

async function run() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}

run();