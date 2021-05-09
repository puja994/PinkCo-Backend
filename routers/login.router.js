import express from 'express'
const router = express.Router()

import {getUserByEmail} from '../models/user/User.model.js'

router.all("*", (req,res,next)=>{
    next()
})

router.post("/", async(req,res)=>{
    try{
        const {email} = req.body
        const user = await getUserByEmail(email)

        if(!user?._id){
            return res
            .status(403)
            .json({status:"error", message:"invalid login details"})
        }
        res.json({
            status:"success",
            message: "login success",
            user,
        })



    }catch(error){
        console.log(error)
        throw new Error(error.message)
    }
})
export default router