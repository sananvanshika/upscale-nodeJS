// controllers/fileController.js
const UserModel = require("../model/user");

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filePath = req.file.path;
  return res
    .status(200)
    .json({ message: "File uploaded successfully", filePath });
};
