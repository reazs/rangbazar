const express = require("express");
const ProductOrder = require("../models/orderModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const User = require("../models/userModel");
router = express.Router();

router.post("/order", async (req, res) => {
  // console.log(req.body);

  try {
    const {
      fName,
      lName,
      email,
      address,
      country,
      state,
      zip,
      isShippingSame,
      saveInfo,
      creditCardName,
      nameOnCard,
      creditCardNumber,
      expiration,
      CVV,
      totalAmount,
      products,
      userID,
    } = req.body;

    const newCustomer = Customer({
      firstName: fName,
      lastName: lName,
      email: email,
      address: {
        addressLine1: address,
        city: "brooklyn",
        state: state,
        zipCode: zip,
      },
    });
    const customer = await newCustomer.save();
    console.log("customer was created", customer._id);
    const randomInt = Math.floor(Math.random() * 1000000000000);
    const randomString = randomInt.toString();
    const carts = await Cart.findOne({ userID: userID });
    const user = await User.findById(userID);
    const productsData = await Promise.all(
      products.map(async (prod) => {
        const updatedCartProds = carts.products.filter(
          (cartProd) => cartProd.productID !== prod.productID
        );
        carts.products = updatedCartProds;

        const product = await Product.findById(prod.productID);
        return {
          product: product._id,
          quantity: prod.quantity,
          price: prod.price,
        };
      })
    );
    carts.save();
    const newOrder = ProductOrder({
      orderNumber: randomString,
      customer: user._id,
      totalAmount: parseFloat(totalAmount),
      shippingAddress: {
        addressLine1: address,
        city: "brooklyn",
        state: state,
        zipCode: zip,
      },
      products: productsData,
    });
    const order = await newOrder.save();
    //  to retrive the oder.products[0].product.name | images | etc
    // have to apply this
    // const order = ProductOrder.findById(id).popluate('products.product')
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const { userID } = req.query;
    const productOrders = await ProductOrder.find({
      customer: userID,
    }).populate("products.product");
    if (productOrders) {
      return res.json(productOrders);
    } else {
      return res.status(404).json({ message: "404 orders not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
