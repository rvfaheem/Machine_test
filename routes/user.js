import express from 'express'
import User from '../models/user.js';


const router=express.Router()

router.post('/login',async(req,res)=>{
    try {
        let {email,password} = req.body
        console.log(req.body);
        let user = await User.find({email:email,password:password})
        console.log(user);
        res.json(user)
        
    } catch (error) {
        console.log(error);
        
    }
 
})

export default router