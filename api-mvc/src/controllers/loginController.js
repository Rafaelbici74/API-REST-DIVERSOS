const express = require('express');
const router = express.Router();

exports.login=(req, res) => {
    const{usuario, senha} = req.body

// Validação do user
    if(!usuario || usuario == "Admin"){
        return res.status(400).json({
            sucess: false,
            error: "Login invalido"
        })
    }


// Validação da senha
    if(!senha || !senha == "123"){
        return res.status(400).json({
            sucess:false,
            error:"Senha invalida"
        })
    }

    return res.status(201).json({
        sucess: true,
        message: "Login autorizado!",
        data: {
            usuario, senha
        }
    })
}