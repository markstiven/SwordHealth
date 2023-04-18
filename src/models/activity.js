const Sequelize = require("sequelize")
const connection = require("../config/database")
const User = require ('./user')
const Activity = connection.define('activities', {
    title:{
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