const express = require('express');
const router = express.Router();

exports.validarUser=(req, res) => {
    const{nome, email, idade} = req.body

// Validação do nome
    if(!nome || nome.length == ""){
        return res.status(400).json({
            sucess: false,
            error: "Nome obrigatório"
        })
    }


// Validação do email
    if(!email || !email.includes("@")){
        return res.status(400).json({
            sucess:false,
            error:"Email Invalida"
        })
    }

// Validação da idade
    if(!idade || idade < 18){
        return res.status(400).json({
            sucess:false,
            error: "idade invalido"
        })
    }

    return res.status(201).json({
        sucess: true,
        message: "Usuario criado com sucesso",
        data: {nome, email, idade}
    })
}