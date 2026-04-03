const express = require('express');
const router = express.Router();

exports.erro=(req, res) => {
    return res.status(200).json({
        erro: "Erro interno simulado"
    })
}