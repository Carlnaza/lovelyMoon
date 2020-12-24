const { model, Schema } = require('mongoose')

const OrderSchema = new Schema({
    status: String,
    ordered_by: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    shipping_price: Number,
    tax: Number,
    subtotal: Number,
    total: Number,
    order_number: String,
    billing_address: {
        line1: String,
        line2: String,
        country: String,
        postal_code: Number,
        state: String
    },
    shipping_address: {
        line1: String,
        line2: String,
        country: String,
        postal_code: Number,
        state: String
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('order', OrderSchema)