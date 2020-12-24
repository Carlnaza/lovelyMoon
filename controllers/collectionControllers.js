const router = require('express').Router();
const { Collection } = require('../models')

// Make a new Collection Type
router.post('/new_collection', (req, res) => {
    Collection.create({
        collection_name: req.body.collection_name
    })
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
})

// Get all Collections with all Products
router.get('/collections', (req, res) => {
    Collection.find()
        .then(collections => {
            res.json(collections)
        })
        .catch(err => console.log(err))
})

module.exports = router