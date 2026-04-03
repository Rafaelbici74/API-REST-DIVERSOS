const express = require('express');
const app = express();

app.use(express.json());


const validarRoutes = require("./routes/validarRoutes");
const formatarRoutes = require("./routes/formatarRoutes");
const textRoutes = require("./routes/textRoutes");
const loginRoutes = require("./routes/loginRoutes");
const calcularRoutes = require("./routes/calcularRoutes");
const classificarRoutes = require("./routes/classificarRoutes");
const erroRoutes = require("./routes/erroRoutes");

app.use('/validar', validarRoutes);

app.post("/validar", (req, res) =>{

    res.send("/validar")   

})


app.use('/formatar', formatarRoutes);

app.post("/formatar", (req, res) =>{

    res.send("/formatar")   

})


app.use('/txtform', textRoutes);

app.post("/txtform", (req, res) =>{

    res.send("/txtform")
})


app.use('/login', loginRoutes);

app.post("/login", (req, res) =>{

    res.send("/login")
})


app.use('/calcular', calcularRoutes);

app.post("/calcular", (req, res) =>{

    res.send("/calcular")
})


app.use('/classificar', classificarRoutes);

app.post("/classificar", (req, res) =>{

    res.send("/classificar")
})


app.use('/erro', erroRoutes);

app.get("/erro", (req, res) =>{

    req.send("/erro")
})


module.exports = app;