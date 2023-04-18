const User = require('../models/user')

exports.getUser = async function(email){
    try {
        const dbReturn = await User.findOne({
            where: {
                email
            }
        })
        return dbReturn
    } catch (error) {
        throw error
    }
}

exports.getUserByID = async function(userID){
    try {
        const dbReturn = await User.findOne({
            where: {
                id: userID
            }
        })
        return dbReturn
    } catch (error) {
        throw error
    }
}