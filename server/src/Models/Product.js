const { Schema, model } = require("mongoose")

const Product = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },

})


module.exports = model("ProductModel", Product)