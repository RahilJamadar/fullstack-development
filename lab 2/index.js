//Internal module to handle file operations
const fs = require('fs');

const FileName = "data.txt";

fs.writeFileSync(FileName, "This is a test file.");

fs.appendFileSync(FileName, "\nThis is appended text.");

const data = fs.readFileSync(FileName, "utf-8");

console.log(data);

//user define module to handle math operations
const math = require('./math');
console.log(math.add(5,3));
console.log(math.divide(5,0));


//external module  install lodash,nodemon
const _ = require('lodash');
const array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));