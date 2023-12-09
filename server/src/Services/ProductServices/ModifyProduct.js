const ProductRepository = require('../../Repositories/ProductRepository');

const updateProduct = (productinfo) => {
    const ProductRepo = new ProductRepository();
    return ProductRepo.update(productinfo.id, productinfo.name, productinfo.price, productinfo.imageUrl);
}
const deleteProduct = (id) => {
    const ProductRepo = new ProductRepository();
    return ProductRepo.delete(id);
}

module.exports = {
    updateProduct,
    deleteProduct
}