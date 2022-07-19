const express = require("express");
const router = express.Router();
const usercontroller = require("../controles/controls")


router.post("/register", usercontroller.register)


router.post("/login", usercontroller.login)

module.exports = router