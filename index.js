import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import adminRouter from './routes/admin.js'
import userRouter from './routes/user.js'

const app= express()

app.use(cors())
app.use(express.json())
app.use('/admin',adminRouter)
app.use('/user',userRouter)

mongoose.connect('mongodb://localhost:27017/Job')
.then(()=> console.log('connected!'));

app.listen(4000, ()=>{
    console.log("Server is Running")
})


