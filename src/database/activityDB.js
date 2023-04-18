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

exports.save = async function(jsonBody){
    try {
        const user_id = 1
        const dbReturn = await Activity.create({
            title: jsonBody.title,
            detail: jsonBody.detail,
            userId: user_id
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

exports.setActivities = async function(activityID, title, detail){
    try {
        const user_id = 1
        const dbReturn = await Activity.update({title, detail}, {
            where: {
                id: activityID,
                userId: user_id
            }
        })
        return dbReturn

    } catch (error) {
        
    }
}