const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    addressLine1: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    // country: {
    //   type: String,
    //   required: true,
    // },
    zipCode: {
      type: String,
    },
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
