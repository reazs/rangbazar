const mongoose = require("mongoose");
const colorSchema = mongoose.Schema({
  name: String,
  color: String,
});
const imageSchema = mongoose.Schema({
  path: String,
  contentType: String,
  name: String,
});
const reviewSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  images: [imageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  productCategory: [],
  genderCategory: [],
  colors: [colorSchema],
  stocks: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sizes: [],
  images: [imageSchema],
  reviews: [reviewSchema],
});
productSchema.index({ userId: 1 }, { unique: true });
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
