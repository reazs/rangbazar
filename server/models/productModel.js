const mongoose = require("mongoose");
const colorSchema = mongoose.Schema({
  name: String,
  color: String,
});
const imageSchema = mongoose.Schema({
  path: String,
  contentType: String,
  name: String
})
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  productCateogry: [],
  genderCateogry: [],
  colors: [colorSchema],
  stocks: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // images: [
  //   {
  //     data: Buffer,
  //     contentType: String,
  //   },
  // ],
  images: [
    imageSchema
  ],
  reviews: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      // images: [
      //   {
      //     data: Buffer,
      //     contentType: String,
      //   },
      // ],
      images: [
        imageSchema
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
