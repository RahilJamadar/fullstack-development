const express = require('express');
const router = express.Router();
const {Student, Mark} = require('../models');

router.post('/',async (req,res) => {
    try{
        const { name, class:studentClass, rollno, subjects } = req.body;

        const student = await Student.create({name , class: studentClass, rollno});
        const marksData = subjects.map(sub => ({
            subject : sub.subject,
            marks : sub.marks,
            studentId : student.studentId
        }));

        await Mark.bulkCreate(marksData);

        res.status(201).json({message : 'Student Created', student});
    } catch (error) {
        res.status(500).json({error : error.message});
    }
});


module.exports = router;