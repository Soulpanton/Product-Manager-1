const ProductsControllers = require("../controllers/products.controllers");
const Product = require("../models/products.model")

module.exports = app => {
    app.get("/api/products", ProductsControllers.findAllProducts);
    app.post("/api/products/create", ProductsControllers.createProduct);
    app.get("/api/products/:productId", ProductsControllers.findOne);
    app.put("/api/products/update/:productId", ProductsControllers.updateProduct)
    app.get("/api/random/products", ProductsControllers.findRandomProduct);
    app.delete("/api/products/destroy/:productId", ProductsControllers.deleteProduct);


}