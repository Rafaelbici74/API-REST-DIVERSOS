const express = require('express');
const router = express.Router();

exports.textForm=(req, res) => {
    const{texto} = req.body

// Validação do nome
    if(texto === ""){
        return res.status(400).json({
            sucess: false,
            error: "Digite algo!"
        })
    }

//Formatações e procedimentos

    const textoFormatado = texto.toUpperCase();
    const textoQuant = texto.length;
    const quantidadePalavras = texto.trim().split(/\s+/).length;


    return res.status(201).json({
        sucess: true,
        message: "Usuario formatado com sucesso",

        data: {
            textoFormatado, textoQuant, quantidadePalavras
        }
    })
}