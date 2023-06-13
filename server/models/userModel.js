const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});
userSchema.index({ email: 1 }, { unique: true });
const User = mongoose.model("User", userSchema);

module.exports = User;

// When a user adds a product to their favorites, you can push the product's
//  ID into the favoriteProducts array of the corresponding user:
// const user = await User.findById(userId);
// user.favoriteProducts.push(productId);
// await user.save();
// To retrieve the user's favorite products, you can use the populate
//  method of Mongoose to populate the actual product documents associated with the stored product IDs:
// const user = await User.findById(userId).populate("favoriteProducts");
// const favoriteProducts = user.favoriteProducts;
