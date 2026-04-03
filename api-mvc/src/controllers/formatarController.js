const express = require('express');
const router = express.Router();

exports.formatarUser=(req, res) => {
    const{nome, telefon} = req.body

// Validação do nome
    if(!nome || nome.length === ""){
        return res.status(400).json({
            sucess: false,
            error: "Nome obrigatório"
        })
    }

    // Validação da idade
    if(!telefon || telefon === 11){
        return res.status(400).json({
            sucess:false,
            error: "telefone invalido"
        })
    }

    const nomeForm = nome.toUpperCase();

    const telefonForm = telefon.replace(
        /(\d{2})(\d{5})(\d{4})/,
        '{$1} $2-$3'

    );


    return res.status(201).json({
        sucess: true,
        message: "Usuario formatado com sucesso",

        data: {
            nomeForm, telefonForm
        }
    })
}