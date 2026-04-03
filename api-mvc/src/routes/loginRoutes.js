const router = require("express").Router();
const loginController = require("../controllers/loginController");

//  http://localhost:3000/
router.post("/", loginController.login);

module.exports = router;