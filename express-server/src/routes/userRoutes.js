const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Registration API endpoint
router.post("/register", userController.registerUser);

module.exports = router;
