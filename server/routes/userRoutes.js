const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const { error } = require("console");
const blacklist = [];
require("dotenv").config();

router = express.Router();

router.post("/", async (req, res) => {
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
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

router.get("/", async (req, res) => {
  try {
    const secretKey = process.env.SECRET_KEY;
    console.log(secretKey);
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
      res.status(404).json({ error: "User not found" });
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
      res.json({
        status: "ok",
        data: token,
      });
    } else {
      res.status(401).json({ error: "Invalid Password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to Find user" });
  }
});
router.get("/userData", async (req, res) => {
  const secretKey = process.env.SECRET_KEY;
  const { token } = req.body;
  try {
    const user = jwt.verify(token, secretKey);
    if (user === "Token Expired" || blacklist.includes(token)) {
      res.json({ status: "bad", error: "Token Expired" });
    } else {
      res.json({
        status: "ok",
        data: { user },
      });
    }
  } catch (error) {
    console.log("error token expired");
    res.json({ status: "bad", code: 500 });
  }
});
router.get("/loadUser", async (req, res) => {
  const secretKey = process.env.SECRET_KEY;
  const { token } = req.body;
  try {
    const user = jwt.verify(token, secretKey, (error, result) => {
      if (error) {
        return "Expired Token";
      }
      return result;
    });
    if (user === "Expired Token" || blacklist.includes(token)) {
      res.json({ status: "ok", data: "Token Expired" });
    } else {
      res.json({ status: "ok", data: user });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/logout", async (req, res) => {
  try {
    const { token } = req.body;
    blacklist.push(token);
    console.log(blacklist);
    res.json({ status: "ok", message: "User successfully logged out" });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});
module.exports = router;

// http://localhost:3000/protected?Authorization=Bearer
// key eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg3OWRhYmI5ODM3MjY2MDZiODI3NTMiLCJpYXQiOjE2ODY2MDkzNzN9.pKRw_w8ByIrEXhNv0acgeu9D5heSOPV_EdYLRE4K82Y
