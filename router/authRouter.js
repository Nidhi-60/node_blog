const express = require("express");

const authController = require("../controller/authController");
const authUser = require("../middleware/userAuth");
const router = express.Router();

router.get("/registration/", authController.registration);
router.post("/register/", authController.register);
router.get("/login/", authController.loginForm);
router.post("/login/", authController.login);
router.get("/logout/", authController.logout);

module.exports = router;
