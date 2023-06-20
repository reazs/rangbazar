const express = require("express");
const Product = require("../models/productModel");
const { json } = require("body-parser");
const multer = require("multer");
const Image = require("../models/Imagemodel");
const fs = require("fs");
const { error } = require("console");
router = express.Router();

// ---------------------------------------- creating product ----------------------------------------------------------->
router.post("/products", async (req, res) => {
  try {
    const {
      name,
      price,
      productCategory,
      stocks,
      colors,
      genderCategory,
      description,
      sizes,
    } = req.body;
    const genders = [];
    genderCategory.forEach((gender) => {
      genders.push(gender);
    });
    const newColors = colors.map((color) => color);
    const newGenderCateg = genderCategory.map((categ) => categ);
    const newProdCateg = productCategory.map((categ) => categ);
    const newSizes = sizes.map((size) => size);
    const product = new Product({
      name: name,
      price: price,
      productCategory: newProdCateg,
      genderCategory: newGenderCateg,
      description: description,
      colors: newColors,
      stocks: stocks,
      sizes: newSizes,
    });
    product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error("Error saving Product: ", error);
    res.status(500).json({ error: "Failed to save product" });
  }
});

// ---------------------------------------- editing product by ID ----------------------------------------------------------->
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
// ---------------------------------------- Delete product by ID ----------------------------------------------------------->
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
// ---------------------------------------- post upload product images ----------------------------------------------------------->

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
            path: "http://localhost:3000/" + modifiedPath,
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
// ---------------------------------------- get all products ----------------------------------------------------------->
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    const responseData = products.map((product) => {
      const { images, ...modefiyProduct } = product;

      const newImages = images.map((image) => image.path);
      console.log();
      return {
        ...modefiyProduct._doc,
        images: newImages,
      };
    });
    res.status(200).json(responseData.reverse());
  } catch (error) {
    return res.status(500).json({ message: "sever error", error: error });
  }
});

// ---------------------------------------- get  product by id ----------------------------------------------------------->

router.get("/product", async (req, res) => {
  try {
    const id = req.query.id;
    const prodcut = await Product.findById(id);
    const { images, ...modefiyProduct } = prodcut;
    const newImages = images.map((image) => image.path);
    if (prodcut) {
      return res
        .status(200)
        .json({ ...modefiyProduct._doc, images: newImages });
    } else {
      return res.json({ message: "product does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error", error: error });
  }
});

router.post(
  "/product/add-review",
  uploads.array("reviewImages"),
  async (req, res) => {
    try {
      const files = req.files;
      const productID = req.body.productID;
      const userID = req.body.userID;
      const title = req.body.title;
      const rating = req.body.rating;
      const comment = req.body.comment;
      const prodcut = await Product.findById(productID).exec();
      const newImages = [];
      if (files) {
        files.forEach((file) => {
          const filePath = file.path;
          const modifiedPath = filePath.replace(/\\/g, "/");
          const newImage = {
            name: file.filename,
            path: "http://localhost:3000/" + modifiedPath,
            contentType: "Image/png",
          };
          newImages.push(newImage);
        });
        const newReview = {
          userID: userID,
          title: title,
          comment: comment,
          rating: parseInt(rating),
          images: newImages,
        };
        if (prodcut.reviews) {
          prodcut.reviews.push(newReview);
          return res.status(200).json(prodcut);
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "server error", error: error });
    }
  }
);

router.post("/product/review-exist", async (req, res) => {
  try {
    const userID = req.body.userID;
    const productID = req.body.productID;
    const product = await Product.findById(productID).exec();
    if (product) {
      if (product.reviews) {
        const reviewExist = product.reviews.findIndex(
          (review) => review.userID === userID
        );

        if (reviewExist != -1) {
          return res.status(200).json({
            message: "Already Submitted Review",
            isSumbitReview: true,
          });
        } else {
          return res.status(200).json({
            message: "No Review found in this user",
            isSumbitReview: false,
          });
        }
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
