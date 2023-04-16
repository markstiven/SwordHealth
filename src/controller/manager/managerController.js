const express = require("express")
const router = express.Router()

router.get("/manager",(req, res) => {
    res.send("Rota do gerente")
})

module.exports = router