const express = require('express')
const router = express.Router()
const usersModels = require('../Models/userModels')

router.get('/', async (req, res, next) => {
    try {
        const users = await usersModels.getAlusers()
        res.json(users)
    } catch (error) {
        next(error)
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await usersModels.getUserById(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
})


router.get('/username/:username', async (req, res, next) => {
    try {
        const { username } = req.params; 
        const user = await usersModels.getUserByUsername(username);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router