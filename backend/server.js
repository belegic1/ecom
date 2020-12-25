import express from 'express'
import colors from 'colors'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'


const app = express()
dotenv.config()
connectDb()

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/categories', categoryRouter)


const port = process.env.PORT || 5000

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});