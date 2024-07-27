import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    // userType:{
    //     type:String,
    // },
    password:{
        type:String,
    }
})

const User =mongoose.model('User',regSchema);

export default User;