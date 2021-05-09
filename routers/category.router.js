import express from 'express'
const router = express.Router()
import slugify from 'slugify'

import { getCategories} from '../models/category/category.model.js'


router.all("*", (req,res,next)=>{
    next()
})

router.get("/", async(req,res)=>{
    try{
        const result = await getCategories()
        res.json({
            status: "success",
            message: "fetching success",
            result,
        })

    }catch(error){
        console.log(error)
        throw new Error(error.message)
    }
})
export default router