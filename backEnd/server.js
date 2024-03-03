const express = require('express')
const cors = require('cors')
const app = express()
const productRouter = require('./Routers/productRouters')
const categoryRouter = require('./Routers/categoryRouter')
const userRouter = require('./Routers/userRouters')
const port = 3001
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('server work');
})
// Products Routers 
app.use('/products', productRouter)
app.use('/products/:id', productRouter)
app.use('/products/:category', productRouter)
app.use('/products/:productName', productRouter)

// categorys Router : 
app.use('/category', categoryRouter)
app.use('/category/:id', categoryRouter)

// users Router : 
app.use('/users', userRouter)
app.use('/users/:id', userRouter)
app.use('/users/:username', userRouter);
app.listen(port)