const { Router } = require('express')
const router = Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWTSecret = process.env.JWTSecret

router.post('/authenticate', async (req, res) => {
    try {
        const {email, password} = req.body != undefined ? req.body : ""
    
        if(!email || !password){
            throw "Por favor preencher os campos Email e Password"
        } else {
            await User.findOne({where:{email}}).then(user => {
                if(user != undefined){
                    const correct = bcrypt.compareSync(password, user.password)
                    if(correct){
                        jwt.sign({id: user.id,
                            email: user.email,
                            age: user.age,
                            sexuality: user.sexuality}, JWTSecret, {expiresIn:'24h'}, (err, token) => {
                                if(err){
                                    throw "Não foi possivel gerar o token"
                                } else{
                                    res.status(200).json({status: 'success', token: token })     
                                } 
                            })
                    }
                } else {
                    throw "Email não encontrado"
                }
            }) 
            
        }
        
    } catch (error) {
        res.status(400).json({status: 'error', message: error, })
    }

})

// function auth(req, res, next){
//     const authToken = req.headers['authorization']
//     if(authToken != undefined){

//         const bearer = authToken.split(' ')
//         const token = bearer[1]

//         jwt.verify(token, JWTSecret, (err, data) => {
//             if(err){
//                 res.status(401)
//                 res.json({err:"Token inválido"})
//             } else {
//                 // req.loggedUser = {id: data.id, email: data.email} ----------- passando as infos do usuario logado
//                 next()
//             }
//         })
//     }else {
//         res.status(401)
//         res.json({err:"Token inválido"})
//     }
// }

const auth = (permissions) => {
    return(req, res, next) =>{
        const authToken = req.headers['authorization']
        if(authToken != undefined){

            const bearer = authToken.split(' ')
            const token = bearer[1]

            jwt.verify(token, JWTSecret, (err, data) => {
                if(err){
                    res.status(401)
                    res.json({err:"Token inválido"})
                } else {
                    if(permissions.includes('role')){ /// ---- é o q vai vir do banco dentro do include o role
                    // req.loggedUser = {id: data.id, email: data.email} ----------- passando as infos do usuario logado
                        next()
                    } else {
                        res.status(401)
                        res.json({err:"Não possui permissão"})
                    }
                }
            })
        }else {
            res.status(401)
            res.json({err:"Token inválido"})
        }
    }
}

module.exports = router
module.exports = {auth}