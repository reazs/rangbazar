const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const { error } = require("console");
const blacklist = [];
require("dotenv").config();
express(cors());
router = express.Router();

router.post("/sign-up", async (req, res) => {
  try {
    const { fName, lName, email, password } = req.body;
    console.log(fName);
    const hashPassword = await bcrypt.hash(password, 7);
    const newUser = new User({
      fName: fName,
      lName: lName,
      email: email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    return res.json(savedUser);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create user" });
  }
});

router.post("/sign-in", async (req, res) => {
  try {
    const secretKey = process.env.SECRET_KEY;
    console.log(secretKey);
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          userId: user._id,
          fName: user.fName,
          lName: user.lName,
          email: user.Email,
        },
        secretKey
      );
      return res.json({
        status: "ok",
        data: token,
      });
    } else {
      return res.status(401).json({ error: "Invalid Password" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to Find user" });
  }
});
router.post("/userData", async (req, res) => {
  const secretKey = process.env.SECRET_KEY;
  const { token } = req.body;
  try {
    const user = jwt.verify(token, secretKey);
    if (user === "Token Expired" || blacklist.includes(token)) {
      return res.json({ status: "bad", error: "Token Expired" });
    } else {
      res.json({
        status: "ok",
        data: { user },
      });
    }
  } catch (error) {
    console.log("error token expired");
    return res.json({ status: "bad", code: 500 });
  }
});
router.post("/loadUser", async (req, res) => {
  const secretKey = process.env.SECRET_KEY;
  const { token } = req.body;
  try {
    const user = jwt.verify(token, secretKey, (error, result) => {
      if (error) {
        return "Expired Token";
      }
      return result;
    });
    if (user === "Expired Token") {
      return res.json({ status: "ok", data: "Token Expired" });
    } else {
      return res.json({ status: "ok", data: user });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.post("/logout", async (req, res) => {
  try {
    const { token } = req.body;
    blacklist.push(token);
    console.log(blacklist);
    return res.json({ status: "ok", message: "User successfully logged out" });
  } catch (error) {
    console.log(error);
    return res.json({ error: error });
  }
});
module.exports = router;

// http://localhost:3000/protected?Authorization=Bearer
// key eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg3OWRhYmI5ODM3MjY2MDZiODI3NTMiLCJpYXQiOjE2ODY2MDkzNzN9.pKRw_w8ByIrEXhNv0acgeu9D5heSOPV_EdYLRE4K82Y
