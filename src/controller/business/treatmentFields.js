const moment = require('moment')

exports.formatFields = async function(dbReturn){
    let returnActivities = []
    if(Array.isArray(dbReturn)){
        for (const activities of dbReturn) {
            returnActivities.push({
                id: activities.id,
                title: activities.title,
                detail: activities.detail,
                createdAt: moment(activities.createdAt).format('MM-DD-yyyy hh:mm:ss'),
                updatedAt: moment(activities.updatedAt).format('MM-DD-yyyy hh:mm:ss')
            }) 
        }
    } else {
        returnActivities.push({
            id: dbReturn.id,
            title: dbReturn.title,
            detail: dbReturn.detail,
            createdAt: moment(dbReturn.createdAt).format('MM-DD-yyyy hh:mm:ss'),
            updatedAt: moment(dbReturn.updatedAt).format('MM-DD-yyyy hh:mm:ss')
        }) 
    }
    return returnActivities
}

exports.managerFields = async function(dbReturn){
    let returnActivities = []
    if(Array.isArray(dbReturn)){
        for (const activities of dbReturn) {
            returnActivities.push({
                id: activities.id,
                title: activities.title,
                detail: activities.detail,
                createdAt: moment(activities.createdAt).format('MM-DD-yyyy hh:mm:ss'),
                updatedAt: moment(activities.updatedAt).format('MM-DD-yyyy hh:mm:ss'),
                user: {
                    name: activities.user.name,
                    age: activities.user.age,
                    sexuality: activities.user.sexuality,
                    email: activities.user.email,
                    createdAt: moment(activities.user.createdAt).format('MM-DD-yyyy hh:mm:ss'),
                    updatedAt: moment(activities.user.updatedAt).format('MM-DD-yyyy hh:mm:ss'),
                }
            }) 
        }
    } else {
        returnActivities.push({
            id: dbReturn.id,
            title: dbReturn.title,
            detail: dbReturn.detail,
            createdAt: moment(dbReturn.createdAt).format('MM-DD-yyyy hh:mm:ss'),
            updatedAt: moment(dbReturn.updatedAt).format('MM-DD-yyyy hh:mm:ss'),
            user: {
                name: dbReturn.user.name,
                age: dbReturn.user.age,
                sexuality: dbReturn.user.sexuality,
                email: dbReturn.user.email,
                createdAt: moment(dbReturn.user.createdAt).format('MM-DD-yyyy hh:mm:ss'),
                updatedAt: moment(dbReturn.user.updatedAt).format('MM-DD-yyyy hh:mm:ss'),
            }
        })  
    }
    return returnActivities
}