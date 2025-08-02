const fs = require('fs');

const filestream = fs.createReadStream('log.txt','utf8');

let readfiledata = '';
filestream.on('data', (data) => {
    readfiledata += data;
    console.log("reading the data");
});
filestream.on('end', (data) => {

    console.log("file reading ended");
});
filestream.on('error', (err) => {
    console.error("Error reading file:", err);
});

filestream.on('close', () => {
    console.log("File stream closed");
});
