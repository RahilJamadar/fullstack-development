const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', 'Rahil@111',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;