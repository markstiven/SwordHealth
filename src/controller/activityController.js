const { Router } = require('express')
const router = Router()
const activityDB = require('../database/activityDB')
const auth = require('../middleware/middleware')
const validateActivity = require('./business/validateActivity')

router.get('/activities/all', auth('manager'),async (req, res) => {
    try {
        const activities = await validateActivity.allActivities()
        res.status(200).json({status: 'success', message: activities, })
    } catch (error) {
        res.status(500).json({status: 'error', message: error, })
    }

})

router.get('/activities', auth('technician'),async (req, res) => {
    try {
        const userID = req.loggedUser.id
        const activities = await validateActivity.activitiesByID(userID)
        res.status(200).json({status: 'success', message: activities })
    } catch (error) {
        res.status(500).json({status: 'error', message: error, })
    }

})

router.post("/activities/save",auth('technician'), async (req, res) =>{
    try {
        const jsonBody = req.body != undefined ? req.body : ""
        const userID = req.loggedUser.id

        const activity = await validateActivity.activitySave(jsonBody, userID)
        res.status(200).json({status: 'success', message: activity})
    } catch (error) {
        console.log(error)
        res.status(500).json({status: 'error', message: error, })
    }
})

router.post("/activities/delete",auth('manager'), async (req, res) =>{
    try {
        const activityID = req.body.id != undefined ? parseInt(req.body.id) : ""
        const userID = req.loggedUser.id

        const returnDelete = await validateActivity.activityDelete(activityID, userID)

        if(returnDelete == 'ok'){
            res.status(200).json({status: 'success', message: `Atividade com o ID: ${activityID} deletado com sucesso.` })
        }

        }catch (error) {
        res.status(500).json({status: 'error', message: error, })
    }
})

router.post("/activities/update", auth('technician'), async (req, res) => {
    try {
        const activityID = req.body.id != undefined ? parseInt(req.body.id) : ""
        const {title, detail} = req.body != undefined ? req.body : ""
        const userID = req.loggedUser.id

        const returnUpdate = await validateActivity.activityUpdate(activityID, title, detail, userID)
        if(returnUpdate == 'ok'){
            res.status(200).json({status: 'success', message: `Atividade com o ID: ${activityID} alterado com sucesso. ` })
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: error, })
    }
})

module.exports = router