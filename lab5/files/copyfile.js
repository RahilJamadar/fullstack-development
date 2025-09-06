const fs = require('fs');

const streamin = fs.createReadStream('log.txt', 'utf8');
const streamout = fs.createWriteStream('copylog1.txt', 'utf8');
streamin.pipe(streamout);

const stat = fs.statSync('log.txt');

let bytesRead = 0;
streamin.on('data', (data) => {
    bytesRead += data.length;
    const progress = parseInt((bytesRead / stat.size) * 100);
    console.log(`Reading data: ${progress}% completed`);
});

streamin.on('end', () => {
    console.log("File copy completed");
});
streamin.on('error', (err) => {
    console.error("Error during file copy:", err);
});
streamin.on('close', () => {
    console.log("File stream closed");
});
streamout.on("errror", (err) => {
    console.error("Error occured in data out:", err);
});

