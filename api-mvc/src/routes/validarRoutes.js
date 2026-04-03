const router = require("express").Router();
const validarController = require("../controllers/validarController");

//  http://localhost:3000/
router.post("/", validarController.validarUser);

module.exports = router;