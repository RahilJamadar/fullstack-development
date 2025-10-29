const dbconfig = require('./config');
const { DataTypes } = require('sequelize');

const Student = require('./student');

const Mark = dbconfig.define('Mark', {
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marks: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

Mark.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });
Student.hasMany(Mark, { foreignKey: 'studentId', as: 'marks' });

module.exports = Mark;