// console.log("callback hell");
const fs = require('fs');
const fileName = "data.txt";

// fs.writeFileSync(fileName,"hello world!");

fs.readFile(fileName, 'utf-8', (err, data) => {
    // console.log(data);
    if (err) {
        console.log("Error:", err);
        return;
    }
    fs.appendFile(fileName, "\n this is new line", () => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                console.log("Error:", err);
                return;
            }
            console.log(data);
        })
    })
});

