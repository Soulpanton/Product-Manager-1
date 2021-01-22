const mongoose = require("mongoose");
const { Decimal128 } = require("bson");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title is required"],
        minlength: [3, "title should be at least 3 characters long"]
    },

    price: {
        type: Decimal128,
        required: [true, "The price is also required"]
    },
    description: {
        type: String,
        required: [true, "Remember to enter a description"]
    }
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;


