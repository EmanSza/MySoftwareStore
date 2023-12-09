const ProductRepository = require('../../Repositories/ProductRepository');

const fetchAllProducts = () => {
    const ProductRepo = new ProductRepository();
    return ProductRepo.fetchAllProducts();
}
const fetchProduct = (id) => {
    const ProductRepo = new ProductRepository();
    return ProductRepo.fetchProduct(id);
}

module.exports = {
    fetchAllProducts,
    fetchProduct
}