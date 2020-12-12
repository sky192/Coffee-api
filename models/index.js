const Sequelize = require('sequelize')
const coffeeModel = require('./coffee')

const connection = new Sequelize('coffees', 'admin', 'coffee$', {
    host: 'localhost', dialect: 'mysql'
})

const coffees = coffeeModel(connection, Sequelize)

module.exports = { heroes }
