require("dotenv").config()
const { Router } = require('express')
const router = Router()
const validate = require('./business/validateUser')

router.post('/authenticate', async (req, res) => {
    try {
        const {email, password} = req.body != undefined ? req.body : ""
        
        const login = await validate.validateUser(email, password)

        if(login){
            res.status(200).json({status: 'success', token: login }) 
        } else {
            throw "Não foi possivel gerar o token"
        }

    } catch (error) {
        res.status(400).json({status: 'error', message: error, })
    }
})

module.exports = router