require("dotenv").config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./src/database/database')
const managerController = require('./src/controller/manager/managerController')
const technicianController = require('./src/controller/activityController')

const port = process.env.API_PORT
const Activity = require('./src/database/activities')
const User = require('./src/database/user')

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/",managerController)
app.use("/",technicianController)


app.get("/", (req, res) => {res.render("index")})
app.listen(port, () => { console.log("Servidor iniciado com sucesso na porta: " + port)
})