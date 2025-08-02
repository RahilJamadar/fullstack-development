const express = require('express');
const teacherRouter = express.Router();

teacherRouter.get('/', (req, res) => {
    res.send(' Teacher Home Page');
});

teacherRouter.get('/get', (req, res) => {
    res.send('Getting Teacher Details');
});

teacherRouter.post("/save", (req, res) => {
    res.send('Saving Teacher Details');
});

module.exports = teacherRouter;