const router = require("express").Router();
const { signup, login, logout } = require("../controllers/authentication");

router.post("/signup", signup);
// router.post("/login", login);
// router.get("/logout", logout);

module.exports = router;
