const express = require('express')
const router = express.Router()
const productModel = require('../Models/productModels')
// all products router : 
router.get('/', async (req, res, next) => {
    try {
        const product = await productModel.getAllProducts()
        res.json(product)
    } catch (error) {
        next(error)
    }
})
// product by id  router :
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await productModel.getProductById(id)
        res.json(product)
    } catch (error) {
        next(error)
    }
})

// product by category  router :
router.get('/category/:category', async (req, res, next) => {
    try {
        const category = req.params.category
        const product = await productModel.getProductByCategory(category)
        res.json(product)
    } catch (error) {
        next(error)
    }
})


// search router :
router.get('/search/:productName', async (req, res, next) => {
    try {
        const productName = req.params.productName
        const product = await productModel.searchByName(productName)
        res.json(product)
    } catch (error) {
        next(error)
    }
})




module.exports = router