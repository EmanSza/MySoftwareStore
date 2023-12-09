const express = require("express");
const router = express.Router();

const ProductController = require("../Controllers/productController");

router.get("/", ProductController.fetchAllProduct);

router.get("/:id", ProductController.fetchProductById);

router.post("/", ProductController.createProduct);

router.put("/:id", ProductController.updateProductById);

router.delete("/:id", ProductController.deleteProductById);

module.exports = router;
