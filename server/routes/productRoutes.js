const express = require("express");
const Product = require("../models/productModel");
const { json } = require("body-parser");
router = express.Router();

// Route for saving a new product
router.post("/products", async (req, res) => {
  try {
    const { name, price, cateogry, description, image } = req.body;
    const product = new Product({
      name: name,
      price: price,
      cateogry: cateogry,
      description: description,
      image: image,
    });
    product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error saving Product: ", error);
    res.status(500).json({ error: "Failed to save product" });
  }
});
// editing product
router.post("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, cateogry, image } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      price,
      description,
      cateogry,
      image,
    });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product Not Found" });
    } else {
      res.json(updatedProduct);
    }
  } catch (error) {
    console.error("Error updating Product", error);
    res.status(500).json({ error: "Failed to update product" });
  }
});
// deleting product
router.delete("/products", async (req, res) => {
  try {
    const { id } = req.body;
    const deleteProduct = await Product.findByIdAndRemove(id);

    if (!deleteProduct) {
      return res.status(404).json({ error: "Product Not Found" });
    } else {
      res.json(deleteProduct);
    }
  } catch (error) {
    console.log("Error deleting product: ", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

router.patch("/products/:id/reviews", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, rating } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product Not Found" });
    }
    product.reviews.push({ title, description, rating });
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.log("Error Adding Product Review");
    res.status(500).json({ error: "Failed to add Review" });
  }
});

module.exports = router;
