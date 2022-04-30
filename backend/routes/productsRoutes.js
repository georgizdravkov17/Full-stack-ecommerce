const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, createProduct ,updateProduct, deleteProduct } = require("../controllers/productsController.js");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.post("/", createProduct);

module.exports = router;