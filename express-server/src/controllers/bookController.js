const Books = require("../model/books");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Books.find({});
    res.status(200).json({
      message: "Data fetched successfuly",
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
};
exports.addBookDetails = async (req, res) => {
  const { bookId, bookName, bookDescription } = req.body;
  try {
    const newBook = new Books({
      bookId,
      bookName,
      bookDescription,
    });

    const savedBook = await newBook.save();
    res
      .status(201)
      .json({ message: "Data added successfuly", data: savedBook });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error });
  }
};

exports.getBookById = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const book = await Books.findOne({ bookId: bookId });

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json({
      message: "Data fetched successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error,
    });
  }
};

exports.deleteBookById = async (req, res) => {
  const bookId = req.params.bookId;
  try {
    const book = await Books.findOneAndDelete({ bookId: bookId });
    if (!book) {
      res.status(400).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Deleted Successfuly",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured",
      error: error,
    });
  }
};
exports.updateBookbyId = async (req, res) => {
  const { bookName, bookDescription } = req.body;
  const bookId = req.params.bookId;
  try {
    const book = await Books.findOneAndUpdate(
      { bookId: bookId },
      // The update operation using the $set operator
      {
        $set: {
          bookName: bookName,
          bookDescription: bookDescription,
        },
      },
      { new: true } // This option returns the updated document after the update operation
    );
    if (!book) {
      res.status(400).json({
        message: "Book not found",
      });
    }
    res.status(200).json({
      message: "Updated Successfuly",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occured",
      error: error,
    });
  }
};

exports.searchBooks = async (req, res) => {
  const search = req.query.search;

  try {
    const searchedBooks = await Books.find({
      $or: [
        { bookName: search },
        { bookDescription: search },
        // { bookId: req.query.bookId },
      ],
    });

    res.status(200).json({
      message: "Searched Successfully",
      data: searchedBooks,
    });
  } catch (error) {
    console.error("Error occurred:", error); // Debugging
    res.status(500).json({
      message: "An error occurred",
      error: error,
    });
  }
};
