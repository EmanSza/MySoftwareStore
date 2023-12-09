const CreateProduct = require('../Services/ProductServices/CreateProduct');
const { fetchAllProducts, fetchProduct } = require('../Services/ProductServices/FetchProduct');
const { updateProduct, deleteProduct } = require('../Services/ProductServices/UpdateProduct');

const createProduct = (req, res) => {
    const { name, price, imageUrl } = req.body;
    if (!name || !price || !imageUrl) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }
    const product = CreateProduct({ name, price, imageUrl });
    return res.status(200).json({
        message: product
    })
}
const fetchAllProduct = (req, res) => {
    const products = fetchAllProducts();
    return res.status(200).json({
        message: products
    })
}
const fetchProductById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }
    const product = fetchProduct(id);
    return res.status(200).json({
        message: product
    })
}

const updateProductById = (req, res) => {
    const { id } = req.params;
    const { name, price, imageUrl } = req.body;
    if (!id || !name || !price || !imageUrl) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }
    const product = updateProduct({ id, name, price, imageUrl });
    return res.status(200).json({
        message: product
    })
}

const deleteProductById = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            message: "Invalid Request"
        })
    }
    const product = deleteProduct(id);
    return res.status(200).json({
        message: product
    })
}

module.exports = {
    createProduct,
    fetchAllProduct,
    fetchProductById,
    updateProductById,
    deleteProductById
}