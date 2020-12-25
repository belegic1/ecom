import express from 'express'
import {registerUser, logIn} from '../controllers/userControllers.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)

userRouter.post('/login', logIn)

export default userRouter