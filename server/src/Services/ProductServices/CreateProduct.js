const ProductRepository = require('../../Repositories/ProductRepository');

module.exports = (productinfo) => {
    const ProductRepo = new ProductRepository();
    return ProductRepo.create(productinfo.name, productinfo.price, productinfo.imageUrl);
}