const router = require("express").Router();
const { signup, login, logout } = require("../controllers/authentication");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
