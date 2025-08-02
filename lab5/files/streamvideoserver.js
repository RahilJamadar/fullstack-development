const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Stream Video Server is running`);
});

app.get('/',(req,res)=>{
    const filePath = 'sample.mp4';
    const fileSize = fs.statSync(filePath).size;
    const headers = {
        'Content-Type': 'video/mp4',
        'Content-Length': fileSize
    };

    res.writeHead(200, headers);

    const stream = fs.createReadStream(filePath);

    stream.pipe(res);

    // stream.on('data', (chunk) => {
    //     console.log(`data reading`);
    // });

})