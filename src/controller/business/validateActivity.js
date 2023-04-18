const activityDB = require('../../database/activityDB')
const userDB = require('../../database/userDB')
const treatmentFields = require('./treatmentFields')
exports.allActivities = async function(){
    try {
        const dbReturn = await activityDB.getActivities()
        if(dbReturn){
            const returnActivities = await treatmentFields.managerFields(dbReturn)
            return returnActivities
        } else {
            throw "Não foram encontradas atividades"
        }
        
    } catch (error) {
        throw error
    }
}

exports.activitiesByID = async function(userID){
    try {

        const dbReturn = await activityDB.getActivityID(userID)
        if(dbReturn){
            const returnActivities = await treatmentFields.formatFields(dbReturn)
            return returnActivities
        } else {
            throw "Não foram encontradas atividades"
        }

    } catch (error) {
        throw error
    }
}
exports.activitySave = async function(jsonBody, userID){
    try {
        if(!jsonBody.title){
            throw "Por favor preencher o campo titulo"
        } else if(jsonBody.detail.length <= 20 || jsonBody.detail.length >= 2500){
            throw "Por favor preencher o campo com o valor minimo de 20 caracteres e menor que 2500"
        } else {
            const userIdValidate = await userDB.getUserByID(userID)
            if(userIdValidate.role == 'technician'){
                const dbReturn = await activityDB.save(jsonBody, userID)
                const returnActivities = await treatmentFields.formatFields(dbReturn)
                return returnActivities
            } else {
                throw "Usuario não encontrado"
            }
        }
    } catch (error) {
        throw error
    }
}

exports.activityDelete = async function(activityID, userdID){
    try {
        if(!activityID){ throw "Por favor inserir um ID válido"}

        const userManager = await userDB.getUserByID(userdID)

        if(userManager.role == 'manager'){

            const dbReturn = await activityDB.delete(activityID)
            if(dbReturn != 0){ 
                return 'ok'
            } else {
                throw `Não foi encontrado o ID:${activityID} no banco`
            }
        } else {
            throw "Não possui permissão para deletar dados"
        }
    } catch (error) {
        throw error
    }
}

exports.activityUpdate = async function(activityID, title, detail, userID){
    try {
        if(!activityID){ throw "Por favor inserir um ID válido"}
        
        if(!title){
            throw "Por favor preencher o campo titulo"
        } else if(detail.length <= 20 || detail.length >= 2500){
            throw "Por favor preencher o campo com o valor minimo de 20 caracteres e menor que 2500"
        }

        const dbReturn = await activityDB.setActivities(activityID, title, detail, userID)

        if(dbReturn != 0){
            return 'ok'
        } else {
            throw `Não foi encontrado o ID:${activityID} no banco`
        }
    } catch (error) {
        throw error
    }
}