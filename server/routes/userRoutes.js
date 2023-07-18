const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");
const cors = require("cors");
const jwt = require("jsonwebtoken");

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
      return res.json({
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
    if (user === "Expired Token" || blacklist.includes(token)) {
      return res.json({ status: "ok", data: "Token Expired" });
    } else {
      const userDetails = await User.findById(user.userId).select("-password");

      return res.json({ status: "ok", data: userDetails });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.post("/contact", async (req, res) => {
  try {
    // transpoter with email support serveice provider SMTP configuration
    const { name, email, request, message } = req.body;
    const transpoter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "support@rangbazaar.us",
        pass: "pXBnzEqEyjZg",
      },
    });
    const mailOptions = {
      from: email,
      to: "reaz.shakil@rangbazaar.us",
      subject: request,
      text: message,
    };
    transpoter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email", error);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent", info.response);
        res.status(200).json({ message: "Email sent successfully" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "server error" });
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
