const express = require("express");
const Cart = require("../models/cartModel");
router = express.Router();

// ------------------------- Adding Product In Cart ------------------ >
router.post("/add-product", async (req, res) => {
  const { productID, userID, price, quantity, size, color, stocks } = req.body;
  try {
    const product = {
      productID: productID,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      size: size,
      color: color,
      stocks: parseInt(stocks),
    };
    const cart = await Cart.findOne({ userID: userID });
    //    checking if user already has cart created
    if (cart) {
      const updatedProducts = cart.products.filter(
        (prod) => prod.productID !== productID
      );
      cart.products = updatedProducts;
      cart.products.push(product); // Add the new product to the updated array
      cart.updated = Date.now();
      await cart.save();

      return res.status(200).json(cart);
    } else {
      // if cart is not created it will create one and save userID
      const newCart = Cart({
        userID: userID,
      });
      newCart.products.push(product);
      newCart.save();
      return res.status(200).json(newCart);
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
});

// ------------------------- Removing Product In Cart -------------------- >
router.post("/remove-product", async (req, res) => {
  const { userID, productID } = req.body;
  try {
    const cart = await Cart.findOne({ userID: userID });
    if (cart) {
      cart.products = cart.products.filter(
        (prodcut) => prodcut.productID !== productID
      );
    } else {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.updated = Date.now();
    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
});

// ------------------------- Get user Carts -------------------- >

router.post("/user-cart", async (req, res) => {
  try {
    const { userID } = req.body;
    const userCart = await Cart.findOne({ userID: userID });
    if (userCart) {
      return res.status(200).json(userCart);
    } else {
      return res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
});

// ------------------------- Get all Carts -------------------- >
router.get("/all", async (req, res) => {
  try {
    const carts = await Cart.find();
    if (carts) {
      return res.status(200).json(carts);
    } else {
      return res.status(404).json({ message: "404 not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
});

// ---------------------- get cart by id ---------------------------->
router.post("/cart", async (req, res) => {
  try {
    const { cartID } = req.body;
    const cart = await Cart.findById(cartID);
    if (cart) {
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "404 not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
