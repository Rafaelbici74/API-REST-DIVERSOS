    const express = require('express');
    const router = express.Router();

    exports.calcular=(req, res) => {
        const{soma, mult, div, sub} = req.body

        const n1 = 10;
        const n2 = 5;
        const somar = n1 + n2;
        const multi = n1 * n2;
        const divi = n1 / n2;
        const subt = n1 - n2;

        // resultado recebe o parametro dentro de {}
        let resultado = {};

        // Validação da somar
        if((soma == 1)){
            "sucesso",
            resultado.somar = somar
        }

        // Validação da multi
        if((mult == 1)){
            "sucesso",
            resultado.multi = multi
        }

        // Validação da div
        if((div == 1)){
            "sucesso",
            resultado.divi = divi
        }
        
        // Validação da subt
        if((sub == 1)){
            "sucesso",
            resultado.subt = subt
        }
        

        return res.status(200).json({
            sucess: true,
            data: {
                resultado
            }
        })
    }