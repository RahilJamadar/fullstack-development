const express = require('express');
const subjectRouter = express.Router();

subjectRouter.get('/', (req, res) => {
    res.send('subject Home Page');
});

subjectRouter.get('/get', (req, res) => {
    res.send('Getting Subject Details');
});

subjectRouter.post("/save", (req, res) => {
    res.send('Saving Subject Details');
});

module.exports = subjectRouter;