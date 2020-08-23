const router = require("express").Router();
const { getRoles } = require("../controllers/roleController");

router.route("/").get(getRoles);

module.exports = router;
