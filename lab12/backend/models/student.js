const dbconfig = require('./config');
const { DataTypes } = require('sequelize');

const Student = dbconfig.define('Student', {
    studentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rollno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});

module.exports = Student;