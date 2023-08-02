const Product = require("../model/product");

exports.addProduct = async (req, res) => {
  const { productName, price } = req.body;

  try {
    const userId = req.userId;
    const newProduct = new Product({
      productName,
      price,
      addedBy: userId,
    });
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
