const { Schema, model } = require("mongoose")

const User = new Schema({
    _id: {
        type: Number,
        required: true
    },
    local: {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type:String,
            required: true
        },
    },
})


module.exports = model("UserModel", User)