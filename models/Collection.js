const { model, Schema } = require('mongoose')

const CollectionSchema = new Schema({
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    collection_name: String
})

module.exports = model('collection', CollectionSchema)