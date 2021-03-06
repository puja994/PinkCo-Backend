import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()
import path from "path";

import cors from 'cors'
import morgan from 'morgan'

const PORT = process.env.PORT || 8001

app.use(cors());
app.use(morgan("tiny"))

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import mongoClient from './config/db.js'
mongoClient()

import categoryRouter from './routers/category.router.js'
import productRouter from "./routers/product.router.js";
import userRouter from './routers/user.router.js'
import loginRouter from './routers/login.router.js'
import signupRouter from './routers/signup.router.js'
import tokenRouter from "./routers/token.router.js";
import paymentRouter from "./routers/payment.router.js";


app.use('/api/v1/category', categoryRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/login', loginRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/signup', signupRouter)
app.use("/api/v1/token", tokenRouter);
app.use("/api/v1/payment", paymentRouter);

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