require("dotenv").config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWTSecret = process.env.JWTSecret
const userDB = require('../../database/userDB')

exports.validateUser = async function(email, password){
    try {
        if(!email || !password){
            throw "Por favor preencher os campos Email e Password"
        } else {
            const user = await userDB.getUser(email)
            if(user.id != undefined){
                const correct = bcrypt.compareSync(password, user.password)
                if(correct){
                    const jwtToken = jwt.sign({id: user.id,
                        email: user.email,
                        age: user.age,
                        sexuality: user.sexuality,
                        role: user.role}, JWTSecret, {expiresIn:'24h'})

                    if(!jwtToken){
                        throw "Não foi possivel gerar o token"
                    } else{
                        return jwtToken    
                    } 
                } else {
                    throw "Senha incorreta"
                }
            } else {
                throw "Email não encontrado"
            } 
        }
    } catch (error) {
        throw error
    }
}