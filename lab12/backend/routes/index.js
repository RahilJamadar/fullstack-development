const express = require('express');
const router = express.Router();

const studentRouter = require('./Student');

router.use('/students', studentRouter);

module.exports = router;