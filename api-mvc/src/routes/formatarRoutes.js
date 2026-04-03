const router = require("express").Router();
const formatarController = require("../controllers/formatarController");

//  http://localhost:3000/
router.post("/", formatarController.formatarUser);

module.exports = router;