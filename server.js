import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

const PORT = process.env.PORT || 8000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import mongoClient from './config/db.js'
mongoClient()

import categoryRouter from './routers/category.router.js'
app.use('/api/v1/category', categoryRouter)

app.get("/", (req,res)=>{
    res.send("e-commerce website")
})

app.use((req,res,next)=>{
    const error = new Error ("Resources not found")
    error.status = 404
    next(error)
})

import {handleError} from './utils/errorHandler.js'
app.use((error, req,res,next)=>{
    handleError(error, res)
})

app.listen(PORT, error =>{
    if(error) console.log(error)
    console.log(`server is running at http://localhost:${PORT}`)
})