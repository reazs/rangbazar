const express = require("express");
const Product = require("../models/productModel");
const { json } = require("body-parser");
const multer = require("multer");
const Image = require("../models/Imagemodel");
const fs = require("fs");
const { error } = require("console");
router = express.Router();

// Route for saving a new product
router.post("/products", async (req, res) => {
  try {
    const {
      name,
      price,
      productCateogry,
      stocks,
      colors,
      genderCategory,
      description,
    } = req.body;
    const product = new Product({
      name: name,
      price: price,
      productCateogry: productCateogry,
      genderCategory: genderCategory,
      description: description,
      colors: colors,
      stocks: stocks,
    });
    product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error saving Product: ", error);
    res.status(500).json({ error: "Failed to save product" });
  }
});
// editing product
router.post("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, cateogry, image } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      price,
      description,
      cateogry,
      image,
    });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product Not Found" });
    } else {
      res.json(updatedProduct);
    }
  } catch (error) {
    console.error("Error updating Product", error);
    res.status(500).json({ error: "Failed to update product" });
  }
});
// deleting product
router.delete("/products", async (req, res) => {
  try {
    const { id } = req.body;
    const deleteProduct = await Product.findByIdAndRemove(id);

    if (!deleteProduct) {
      return res.status(404).json({ error: "Product Not Found" });
    } else {
      res.json(deleteProduct);
    }
  } catch (error) {
    console.log("Error deleting product: ", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
});

router.patch("/products/:id/reviews", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, rating } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product Not Found" });
    }
    product.reviews.push({ title, description, rating });
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.log("Error Adding Product Review");
    res.status(500).json({ error: "Failed to add Review" });
  }
});

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const uploads = multer({
  storage: Storage,
});

// router.post("/upload-images", uploads.single("image"), async (req, res) => {
//   try {
//     const newImage = new Image({
//       name: "" + req.file.originalname,
//       image: {
//         data: fs.readFileSync("uploads/" + req.file.filename),
//         contentType: "image/png",
//       },
//     });
//     newImage.save().then(() => {
//       return res.json({
//         success: true,
//         message: "Image uploaded successfully",
//       });
//     });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ message: "Error uploading images", error: error });
//   }
// });

router.post("/upload-images", uploads.array("imagesTest"), (req, res) => {
  try {
    const files = req.files;
    if (files) {
      const temp_images = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        temp_images.push({
          data: fs.readFileSync("uploads/" + file.filename),
          contentType: "image/png",
        });
      }
      const filePaths = files.map((file) => file.path);
      console.log(filePaths);
      const newImage = new Image({
        name: Date.now() + files[0].filename,
        images: temp_images,
      });
      newImage.save().then(() => {
        return res.json({
          status: "ok",
          message: "Files uploaded successfully",
        });
      });
    } else {
      return res.json({ message: "File Not Found", error: "file not found" });
    }
  } catch (error) {
    return res.json({ error: error, message: "500 sever error" });
  }
});

router.post(
  "/upload-products-images",
  uploads.array("images"),
  async (req, res) => {
    const productId = req.headers.productid; // Access productId from request headers
    console.log("productId", productId); // Print the productId
    if (req.files) {
      try {
        const product = await Product.findById(productId);
        const files = req.files;
        const review_images = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const filePath = file.path;
          const modifiedPath = filePath.replace(/\\/g, "/");
          review_images.push({
            name: file.filename,
            path: modifiedPath,
            contentType: "Image/png",
          });
        }
        console.log("works here");
        product.images = review_images;
        await product.save();
        return res
          .status(200)
          .json({ message: "review image uploaded successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "server errror code 500", error: error });
      }
    }
  }
);
router.use("/uploads", express.static("uploads"));
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    const responseData = products.map((product) => {
      const images = product.images.map((image) => image.path);
      return {
        _id: product._id,
        name: product.name,
        price: product.price,
        stocks: product.stocks,
        productCateogry: product.productCateogry,
        genderCategory: product.genderCategory,
        colors: product.colors,
        images: images,
      };
    });
    res.status(200).json(responseData);
  } catch (error) {
    return res.status(500).json({ message: "sever error", error: error });
  }
});

module.exports = router;
