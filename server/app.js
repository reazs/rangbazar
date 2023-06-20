const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoutes.js");
const userRoute = require("./routes/userRoutes.js");
const cors = require("cors");
const cartRoutes = require("./routes/cartRoutes.js");
const app = express();
app.use(cors());
app.use(express.json());
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/rangbazaar");

    app.use("/", productRoute);
    app.use("/users", userRoute);
    app.use("/carts", cartRoutes);
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
    console.log("Fruit saved successfully");
  } catch (error) {
    console.log("Error connecting to server: ", error);
  }
}

main();

// const product1 = new Product({
//   name: "T-shirt",
//   price: 29.99,
//   cateogry: "Clothing",
//   description: "A comfortable and stylish t-shirt.",
//   image:
//     "https://i.etsystatic.com/23839148/r/il/b5fd38/2559846637/il_570xN.2559846637_l0ah.jpg",
// });
// await product1.save();
