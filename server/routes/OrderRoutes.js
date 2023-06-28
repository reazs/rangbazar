const express = require("express");
const ProductOrder = require("../models/orderModel");
const Customer = require("../models/customerModel");
const Product = require("../models/productModel");
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
    const productsData = await Promise.all(
      products.map(async (prod) => {
        const product = await Product.findById(prod.productID);
        return {
          product: product._id,
          quantity: prod.quantity,
          price: prod.price,
        };
      })
    );
    const newOrder = ProductOrder({
      orderNumber: randomString,
      customer: customer._id,
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

module.exports = router;
