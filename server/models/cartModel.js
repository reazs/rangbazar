const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  productID: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const CartSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  products: [productSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updated: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
