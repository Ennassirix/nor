const express = require('express')
const router = express.Router()
const categoryModel = require('../Models/categoryModels')
// all categorys router : 
router.get('/',async (req,res,next)=>{
    try {
        const categorys = await categoryModel.getAllCategorys()
        res.json(categorys)
    } catch (error) {
        next(error)
    }
})


router.get('/:id',async (req,res,next)=>{
    try {
        const id  = req.params.id
        const category = await categoryModel.getCategoryById(id)
        res.json(category)
    } catch (error) {
        next(error)
    }
})





module.exports = router