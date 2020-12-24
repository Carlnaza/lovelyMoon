const { model, Schema } = require('mongoose')

const ProductSchema = new Schema({
    sku: {
        type: String,
        unique: true
    },
    images: [String],
    price: Number,
    title: String,
    description: String,
    style: [String],
    shipping_details: {
        weigth: Number,
        width: Number,
        height: Number,
        depth: Number
    },
    quantity: Number,
    product_collection: [
        {
            type: String
        }
    ],
    comments: [
        {
            commented_by: {
                type: String
            },
            rating: Number,
            text: String,
            createdAt: { type: Date, default: Date.now }
        }
    ],
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('product', ProductSchema)