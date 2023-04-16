const Sequelize = require("sequelize")
const connection = require("./database")
const User = require ('./user')
const Activity = connection.define('activities', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    detail: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

User.hasMany(Activity)
Activity.belongsTo(User)

module.exports = Activity