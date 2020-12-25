import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

export const registerUser =  asyncHandler(async(req,res)=>{
    const {firstName,
         lastName,
         username,
          email ,
           password,
        role, contactNumber} = req.body
    const userExist = await User.findOne({email})
    if (userExist){
       res.status(400)
       throw new Error('User Already Exist')
    }
        const user = await User.create({firstName,
         lastName, 
         username,
          email ,
          password,
          role,
        contactNumber})
    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            contactNumber: user.contactNumber,
            role: user.role,
            token: jwt.sign({id: user._id},
                 process.env.JWT_SECRET, {expiresIn: '30d'})
        })
    } else {
       res.status(400)
       throw new Error('Invalid user data')
    }
})

export const logIn = asyncHandler(async(req, res)=>{
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (user && (await user.matchPasswords(password))) {
          res.json({
            _id: user._id,
            userName: user.name,
            email: user.email,
            role: user.role,
            token: jwt.sign({id: user._id},
                 process.env.JWT_SECRET, {expiresIn: '30d'})
        })
    } else {
        res.status(404)
        throw new Error('Invalid Email or Password')
    }
}) 