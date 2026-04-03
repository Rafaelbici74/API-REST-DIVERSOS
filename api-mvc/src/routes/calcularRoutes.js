const router = require("express").Router();
const calcularController = require("../controllers/calcularController");

//  http://localhost:3000/
router.post("/", calcularController.calcular);

module.exports = router;