const BaseRepository = require('./BaseRepository')

const Product = require('../Models/Product');
class ProductRepository extends BaseRepository {
    constructor() {
        super(Product);
    }
    create(name, price, imageUrl) {
        let data = {
            name: name,
            price: price,
            imageUrl: imageUrl
        }
        return this.model.create(data);
    }
    update(id, name, price, imageUrl) {
        let data = {
            name: name,
            price: price,
            imageUrl: imageUrl
        }
        return this.model.updateOne({ _id: id }, data).then((data) => {
            return data;
        });
    }
    fetchAllProducts() {
        return this.model.find().then((data) => {
            return data;
        });
    }
    fetchProduct(id) {
        return this.model.findById(id).then((data) => {
            return data;
        });
    }
    delete(id) {
        return this.model.deleteOne({ _id: id }).then((data) => {
            return data;
        });
    }
}

module.exports = ProductRepository;