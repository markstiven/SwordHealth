const Sequelize = require("sequelize")
const connection = require("./database")

const User = connection.define('Users', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    }
    ,
    sexuality: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
// User.sync({force: true})

module.exports = User