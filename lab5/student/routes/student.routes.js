const express = require('express');
const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
    res.send('Student Home Page');
});

studentRouter.get('/get', (req, res) => {
    res.send('Getting Student Details');
});

studentRouter.post("/save", (req, res) => {
    res.send('Saving Student Details');
});

module.exports = studentRouter;