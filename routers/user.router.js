import express from 'express'
const router = express.Router()

import {createUser, getUserByEmail} from '../models/user/User.model.js'

router.all("*", (req,res,next) =>{
    next()
})

router.post("/", async(req,res)=>{
    try{
        const newUser = {
            ...req.body,
        }
        const result = await createUser(newUser)
        console.log(result)

    }catch(error){
        throw new Error (error.message)

    }
})
export default router