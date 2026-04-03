const express = require('express');
const router = express.Router();

exports.classificar=(req, res) => {
    const{numero} = req.body

    let status

        // Validação da nota reprovado
    if(numero < 50){
          status =  "Reprovado"
    }


// Validação da nota recuperação
    if(numero >= 50 && numero <= 69){
          status = "Recuperação"
    }

// Validação da nota aprovada
    if(numero >= 70){
          status = "Aprovada"
    }

// Retorna se o aluno estiver aprovado
    return res.status(200).json({
        status: status,
        nota: numero
    })
}