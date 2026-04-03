const router = require("express").Router();
const textController = require("../controllers/textController");

//  http://localhost:3000/
router.post("/", textController.textForm);

module.exports = router;