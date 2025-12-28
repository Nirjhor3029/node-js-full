/**
 * callback-hell solved by promises and async await
 */


function getData(id) {
    return new Promise((resolve, reject) => {
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