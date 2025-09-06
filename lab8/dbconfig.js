const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'testdb',
    username: 'root',
    password: 'Rahil@111',
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize;