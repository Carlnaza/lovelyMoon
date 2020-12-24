const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    isAdmin: Boolean,
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: [
        {
            line1: String,
            line2: String,
            country: String,
            city: String,
            postal_code: Number,
            state: String
        }
    ],
    cart: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ],
    payment_method: [
        {
            payment_type: String,
            card_number: Number,
        }
    ],
    order_history: {
        type: Schema.Types.ObjectId,
        ref: 'order'
    },
    createdAt: { type: Date, default: Date.now }
})

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('user', UserSchema)