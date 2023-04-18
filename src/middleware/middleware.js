require("dotenv").config()
const jwt = require('jsonwebtoken')
const JWTSecret = process.env.JWTSecret

const auth = function(permissions = []) {
    return async (req, res, next) =>{
        try {
            const authToken = req.headers['authorization']
            if(authToken != undefined){
        
                const bearer = authToken.split(' ')
                const token = bearer[1]
        
                jwt.verify(token, JWTSecret, (err, data) => {
                    if(err){
                        res.status(401)
                        res.json({err:"Token inválido"})
                    } else {
                        req.loggedUser = data
                        if(permissions == req.loggedUser.role){
                            next()
                        } else {
                            res.status(401)
                            res.json({err:"Não possui permissão"})
                        }
                    }
                })
            } else {
                res.status(401)
                res.json({err:"Token inválido"})
            }
            
        } catch (error) {
            res.status(401)
            res.json({err:"Token inválido"})
        }
    }
}

module.exports = auth