import express from 'express'
const router = express.Router()
import slugify from 'slugify'

import { getCategories} from '../models/category/category.model.js'
import { getProductById } from "../models/products/product.model.js";


router.all("*", (req,res,next)=>{
    next()
})

router.get("/", async(req,res)=>{
    try{
        const result = await getCategories()
        res.json({
            status: "success",
            message: "fetch success",
            result,
        })

    }catch(error){
        console.log(error)
        throw new Error(error.message)
    }
})


router.get("/:_id", async (req, res) => {
    const { _id } = req.params
  
    try {
      const result = await getProductById(_id);
  
      res.json({
        status: "success",
        message: " products displayed",
        result,
      });
    } catch (error) {
      throw error;
    }
  });
  export default router;