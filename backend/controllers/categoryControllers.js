import Category from '../models/categoryModel.js'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import slugify from 'slugify'

const createdCategories= (categories, parentId= null)=>{
    const categoryList = []
    let category;
    if(parentId === null){
       category = categories.filter(cat => cat.parentId == undefined)
    }else{
        category = categories.filter(cat =>cat.parentId == parentId)
    }
    for (let c of category) {
        categoryList.push({
        _id: c._id,
        name: c.name,
        slug: c.slug,
        children: createdCategories(categories, c._id)
    })
    }
    return categoryList
}
export const createCategory =  asyncHandler(async(req, res)=>{
    const categoryObj= {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId
    }
    const category = new Category(categoryObj)

    const createdCategory = await category.save()
    res.status(201).json(createdCategory)
})

export const getCategories =  asyncHandler(async(req, res)=>{
    const categories = await Category.find({})

    const categoryList = createdCategories(categories)

    res.json(categoryList)
})