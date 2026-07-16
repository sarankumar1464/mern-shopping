const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../../controllers/usercontroller");
const { authenticateToken } = require("../../controllers/authcontroller");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
