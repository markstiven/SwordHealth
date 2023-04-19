const Activity  = require('../models/activity')
const User = require('../models/user')

exports.getActivities = async function(){
    try {
        const dbReturn = await Activity.findAll({
            include: [{model: User}]
        })

        return dbReturn

    } catch (error) {
        throw error
    }
}

exports.save = async function(jsonBody, userID){
    try {
        const dbReturn = await Activity.create({
            title: jsonBody.title,
            detail: jsonBody.detail,
            userId: userID
        })
        return dbReturn

    } catch (error) {
        throw error
    }
}

exports.delete = async function(activityID){
    try {
        const dbReturn = await Activity.destroy({
            where: {
                id: activityID
            }
        })

        return dbReturn

    } catch (error) {
        throw error
    }
}

exports.setActivities = async function(activityID, title, detail, userdID){
    try {
        const dbReturn = await Activity.update({title, detail}, {
            where: {
                id: activityID,
                userId: userdID
            }
        })
        return dbReturn

    } catch (error) {
        
    }
}

exports.getActivityID = async function(userID){
    try {
        const dbReturn = await Activity.findAll({
            where : {
                userId: userID
            }
        })

        return dbReturn

    } catch (error) {
        throw error
    }
}

exports.getActivityUserById = async function(userID, activityID ){
    try {
        const dbReturn = await Activity.findOne({
            where: {
                userId: userID,
                id: activityID
            },
            include: [{model: User}]
        })

        return dbReturn

    } catch (error) {
        throw error
    }
}