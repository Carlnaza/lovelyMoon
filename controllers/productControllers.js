const router = require('express').Router();
const { Product } = require('../models')

router.post('/add_product', (req, res) => {
    Product.create({
        sku: req.body.sku,
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        images: [req.body.firebase_image_id],
        style: req.body.style,
        quantity: req.body.quantity,
        product_collection: req.body.product_collection
    })
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
})

router.get('/products', (req, res) => {
    Product.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err))
})


module.exports = router