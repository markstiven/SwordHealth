const Sequelize = require('sequelize')
const configDB = require('./configDB')
const connection = new Sequelize(configDB)

module.exports = connection