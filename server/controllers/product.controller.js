const  Product  = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    const { titleProduct, priceProduct, descriptionProduct } = request.body;
    console.log(request.body);
    Product.create({
        titleProduct,
        priceProduct,
        descriptionProduct
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}
