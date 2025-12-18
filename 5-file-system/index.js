const fs = require('fs');
const path = require('path');

console.log(`__dirname: ${__dirname}`);

const dataFolder = path.join(__dirname, "data");
console.log(`dataFolder: ${dataFolder}`);


// make directory
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data Folder Created Successfully");

}
// else{
//     console.log("Folder already exists");

// }

//make file
// const filePath = path.join(__dirname,'data',"data.txt")
const filePath = path.join(dataFolder, "data.txt")
console.log(`Filepath: ${filePath}`);

fs.writeFileSync(filePath, 'Hello World 2');

// Read content from file
const fileContent = fs.readFileSync(filePath,'utf-8');
console.log(`fileContent: ${fileContent}`);
 

// Append new content
fs.appendFileSync(filePath,"\nNew Content to Append")
