const { model, Schema } = require('mongoose')

const ProductSchema = new Schema({
    sku: {
        type: String,
        unique: true
    },
    images: [
        {
            firebase_image_id: String
        }
    ],
    price: Number,
    title: String,
    description: String,
    shipping_details: {
        weigth: Number,
        width: Number,
        height: Number,
        depth: Number
    },
    quantity: Number,
    collection: [
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