const router = require("express").Router();
const { getRoles, getRoleById } = require("../controllers/roleController");

router.route("/").get(getRoles);
router.route("/:id").get(getRoleById);

module.exports = router;
