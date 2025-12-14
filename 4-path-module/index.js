const path = require('path');

// console.log(path);
console.log("\n__dirname: ");
console.log(__dirname);

console.log(path.dirname(__dirname));
console.log(path.basename(__dirname));


console.log("\n__filename: ");
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));

console.log(`\n File Extension: ${path.extname(__filename)}`);


const jonedPath = path.join('/user','documents','node', 'projects');
console.log(`\njoined path: ${jonedPath}`);


// const fullPath = path.resolve('folder', 'file.txt');
const fullPath = path.resolve();
console.log(`\nfullPath: ${fullPath}`);



const p = 'folder//subfolder//../file.txt';
console.log(`\nNormalize path: ${path.normalize(p)}`);





