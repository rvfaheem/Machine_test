import express from 'express'
import User from '../models/user.js'

const router =express.Router()

router.post('/register',async(req,res)=>{
    console.log(req.body)
    let categories = new User(req.body)
    let response = await categories.save()
    res.json(response)
})


export default router