const { request } = require("express");
const Product = require("../models/products.model");


module.exports.findAllProducts = (req, res) => {
    console.log("Finding all products")
    Product.find()
        .then(allProducts => res.json({ results: allProducts }))
        .catch(err => res.json({ err }))
}

module.exports.createProduct = (req, res) => {
    console.log("Creating a product")
    Product.create(req.body)
        .then(newProduct => res.json({ results: newProduct }))
        .catch(err => res.json({ err }))
}

module.exports.findOne = (req, res) => {
    console.log("the product id to find is :", req.params.productId)
    Product.findOne({ _id: req.params.productId })
        .then(theProduct => res.json({ results: theProduct }))
        .catch(err => res.json({ err }))
}

module.exports.updateProduct = (req, res) => {
    console.log("we are updating this product", req.params.productId)
    Product.findOneAndUpdate({ _id: req.params.productId }, req.body,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        .then(updatedProduct => res.json({ results: updatedProduct }))
        .catch(err => res.json({ err }))
}

module.exports.findRandomProduct = (req, res) => {
    console.log("im trying to pick a random product")
    // mongoose command to retrieve all Jokes form the Joke table(collection)
    Product.find()
        .then(allProducts => {
            let randomProduct = Math.floor((Math.random() * allProducts.length) + 1)
            console.log('the products array length is:', allProducts.length)
            console.log("the random product is:", allProducts[randomProduct])
            res.json({ results: allProducts[randomProduct] })
        })
        .catch(err => res.json({ err }))
}

module.exports.deleteProduct = (req, res) => {
    console.log("the product id to find is :", req.param.productId)
    Product.findByIdAndDelete(req.params.productId)
        .then(deletedProduct => res.json({ results: deletedProduct }))
        .catch(err => res.json({ err }))
}