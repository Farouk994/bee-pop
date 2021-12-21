const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth");

// Register User to DB
router.post("/register", register);

module.exports = router;
