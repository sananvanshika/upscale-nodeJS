const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookId: {
    type: Number,
    required: true,
    unique: true,
  },
  bookName: {
    type: String,
    required: true,
    unique: true,
  },
  bookDescription: {
    type: String,
  },
});

const Books = mongoose.model("book", bookSchema);
module.exports = Books;
