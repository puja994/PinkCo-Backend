import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

const PORT = process.env.PORT || 8000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import mongoClient from './config/db.js'
mongoClient()

app.get("/", (req,res)=>{
    res.send("e-commerce website")
})

app.listen(PORT, error =>{
    if(error) console.log(error)
    console.log(`server is running at http://localhost:${PORT}`)
})