const router = require("express").Router();
const classificarController = require("../controllers/classificarController");

//  http://localhost:3000/
router.post("/", classificarController.classificar);

module.exports = router;