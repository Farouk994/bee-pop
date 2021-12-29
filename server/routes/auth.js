const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth");
const { login } = require("../controllers/auth");

// Register User to DB
router.post("/register", register);

// Login User
router.post("/login", login);

module.exports = router;
