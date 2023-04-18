const { Router } = require('express')
const router = Router()
const activityDB = require('../database/activityDB')
const auth = require('./userController')
router.get('/activities', async (req, res) => {
    try {
        const dbReturn = await activityDB.getActivities()
        
        res.status(200).json({status: 'success', message: dbReturn, })
    } catch (error) {
        res.status(500).json({status: 'error', message: error, })
    }

})

router.post("/activities/save", async (req, res) =>{
    try {
        const jsonBody = req.body != undefined ? req.body : ""

        if(!jsonBody.title){
            throw "Por favor preencher o campo titulo"
        } else if(jsonBody.detail.length <= 20 || jsonBody.detail.length >= 2500){
            throw "Por favor preencher o campo com o valor minimo de 20 caracteres e menor que 2500"
        } else {
            const dbReturn = await activityDB.save(jsonBody)
            res.status(200).json({status: 'success', message: dbReturn, })
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({status: 'error', message: error, })
    }
})

router.post("/activities/delete", async (req, res) =>{
    try {
        const activityID = req.body.id != undefined ? parseInt(req.body.id) : ""

        if(!activityID){
            throw "Por favor inserir um ID valido"
        } else {
            const dbReturn = await activityDB.delete(activityID)

            if(dbReturn != 0){
                res.status(200).json({status: 'success', message: `Atividade com o ID: ${activityID} deletado com sucesso.` })
            } else {
                throw `Não foi encontrado o ID:${activityID} no banco`
            }
        }

    } catch (error) {
        res.status(500).json({status: 'error', message: error, })
    }
})

router.post("/activities/update", async (req, res) => {
    try {
        const activityID = req.body.id != undefined ? parseInt(req.body.id) : ""
        const {title, detail} = req.body != undefined ? req.body : ""

        if(!activityID){
            throw "Por favor inserir um ID valido"
        } else if(!title){
            throw "Por favor preencher o campo titulo"
        } else if(detail.length <= 20 || detail.length >= 2500){
            throw "Por favor preencher o campo com o valor minimo de 20 caracteres e menor que 2500"
        } else {
            const dbReturn = await activityDB.setActivities(activityID, title, detail)

            if(dbReturn != 0){
                res.status(200).json({status: 'success', message: `Atividade com o ID: ${activityID} alterado com sucesso. ` })
            } else {
                throw `Não foi encontrado o ID:${activityID} no banco`
            }
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: error, })
    }
})

module.exports = router