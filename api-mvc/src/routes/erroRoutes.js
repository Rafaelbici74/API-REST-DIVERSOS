const router = require("express").Router();
const erroController = require("../controllers/erroController");

//  http://localhost:3000/
router.get("/", erroController.erro);

module.exports = router;