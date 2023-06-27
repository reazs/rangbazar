const express = require("express");
const ProductOrder = require("../models/orderModel");
const Customer = require("../models/customerModel");
router = express.Router();

router.post("/order", async (req, res) => {
  console.log(req.body);
  try {
    const [
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
      prdoucts,
    ] = req.body;
    const newCustomer = Customer({
      fName: fName,
      lName: lName,
      email: email,
      address: address,
      city: "brooklyn",
      state: state,
      zipCode: zip,
    });
    newCustomer.save();
    if (newCustomer) {
      const newOrder = ProductOrder({
        orderNumber: Math.random(0, 999999999999).toString(),
        customer: newCustomer._id,
        totalAmount: totalAmount,
        shippingAddress: address,
        city: "brooklyn",
        state: state,
        zipCode: zip,
      });

      const newProducts = prdoucts.filter((product) => {
        return {
          product: product.productID,
          quantity: product.quantity,
          price: product.price,
        };
      });
      newOrder.prdoucts = newProducts;
      newOrder.save();
      return res.status(200).json(newOrder);
    }
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
});

module.exports = router;
