const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');
const authMiddleware = require('../middlewares/authMiddleware');

// Set up multer storage
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post('/upload', authMiddleware.verifyToken, upload.single('uploadFile'), fileController.uploadFile);

module.exports = router;
