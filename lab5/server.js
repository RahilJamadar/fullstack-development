const express = require('express');

const studentRouter = require('./student/routes/student.routes');
const teacherRouter = require('./teacher/routes/teacher.routes');
const subjectRouter = require('./subject/routes/subject.routes');
const app = express();
const PORT = 3000;
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);
app.use('/subject', subjectRouter);
app.listen(PORT, () => {
    console.log(`Server is running`);
});