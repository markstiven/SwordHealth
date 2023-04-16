const express = require("express")
const router = express.Router()
const activityDB = require('../database/activityDB')

router.get("/admin/activities/activityNew",(req, res) => {res.render("admin/activities/activityNew")})

router.post("/activities/save", async (req, res) =>{
    try {
        const jsonBody = req.body != undefined ? req.body : ""

        if(!jsonBody.title){
            throw "Por favor preencher o campo titulo"
        } else if(jsonBody.detail.length <= 20 && jsonBody.detail.length >= 2500){
            throw "Por favor preencher o campo com o valor minimo de 20 caracteres e menor que 2500"
        } else {
            await activityDB.save(jsonBody)
            console.log("registro feito com sucesso")
        }

    } catch (error) {
        res.send(error)
    }
})

module.exports = router