const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');

const cron = require('node-cron');

const port = 3000;
const app = express();
const time = new Date();

const directory = __dirname + '/log';
const fileName = `log_${time.getUTCDate()}_${time.getMilliseconds()}.txt`;


const writestream = fs.createWriteStream(`${directory}/${fileName}`, "utf-8");

app.use(express.json());

app.use((req, res, next) => {
    writestream.write(JSON.stringify(req.headers) + '\n');
    next();
});

app.get('/Student', createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true,
    pathRewrite: { '^/Student': '/getStudent' }
}));

app.get('/Teacher', createProxyMiddleware({
    target: 'http://localhost:4002',
    changeOrigin: true,
    pathRewrite: { '^/Teacher': '/getTeacher' }
}));

cron.schedule('0 * * * *', () => {
  fs.readdir(directory, (err, files) => {
    if (err) return;
    files.forEach(file => fs.unlink(`${directory}/${file}`, () => {}));
  });
});

app.listen(port, () => {
    console.log(`Gateway is running on ${port}`);
});