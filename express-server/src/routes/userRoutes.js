const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
// const authMiddleware = require("../middlewares/authMiddleware");

// Registration API endpoint
router.post("/register", userController.registerUser);

// Login API endpoint
router.post("/login", authController.loginUser);

// Middleware to verify JWT token
// router.use(authMiddleware.verifyToken);

// Protected APIs (require authentication)
router.get("/all", userController.getAllUsers);
router.get("/:id", userController.getSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
