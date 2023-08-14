const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authMiddleware = require("../middlewares/authMiddleware");
//get list of all books
router.get("/books", authMiddleware.verifyToken, bookController.getAllBooks);
router.post(
  "/books",
  authMiddleware.verifyToken,
  bookController.addBookDetails
);
router.get(
  "/books/:bookId",
  authMiddleware.verifyToken,
  bookController.getBookById
);
router.delete(
  "/books/:bookId",
  authMiddleware.verifyToken,
  bookController.deleteBookById
);
router.put(
  "/books/:bookId",
  bookController.updateBookbyId
);
router.get("/search", bookController.searchBooks);

module.exports = router;
