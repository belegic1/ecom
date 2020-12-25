import express from 'express'
import {protect,admin} from '../middleware/authMiddleware.js'
import {createCategory, getCategories} from '../controllers/categoryControllers.js'

const categoryRouter = express.Router()

categoryRouter.get('/', getCategories)
categoryRouter.post('/create', protect,admin, createCategory )

export default categoryRouter