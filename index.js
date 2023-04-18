require("dotenv").config()
require('./src/models/activity')
require('./src/models/user')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./src/config/database')
const userController = require('./src/controller/userController')
const activityController = require('./src/controller/activityController')

const port = process.env.API_PORT

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/",activityController)
app.use("/",userController)

app.listen(port, () => { console.log("Servidor iniciado com sucesso na porta: " + port)})