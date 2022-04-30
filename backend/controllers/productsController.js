const mongoose = require("mongoose");
const Product = require("../models/Product");
const { productSchema } = require("../validations/productSchema");

const getAllProducts = async (req, res) => {
    try{
       const products = await Product.find();
       res.json(products); 
    } catch(err){
        res.json({error: err.message});
    }
}

const createProduct = async (req, res) => {
    try{
        const isProductData = await productSchema.validate(req.body);

        if(!isProductData){
            res.json({message: "Invalid Data!"});
        }

        const { name, description, price } = req.body;

        const newProduct = new Product({
            name, 
            description,
            price
        });

        await newProduct.save();

        res.json({message: "Succesfully added product", newProduct});

    } catch(err){
        res.json({message: err.message});
    }
}

const getProductById = async (req, res) => {
    try{
       const product = await Product.findById(req.params.id);
       res.json(product);
    } catch(err){
        res.json({error: err.message});
    }
}

const deleteProduct = async (req, res) => {
    try{
       const product = await Product.deleteOne({id: req.params.id});
       res.json({
           message: "Succesfully deleted product",
           product
       });
    } catch(err){
        res.json({error: err.message});
    }
}

const updateProduct = async (req, res) => {
    try{
      const updatedProduct = await Product.updateOne({ id: req.params.id }, req.body);
      res.json({
          message: "Successfully updated product",
          updatedProduct
     })
    } catch(err){
        res.json({message: err.message});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}