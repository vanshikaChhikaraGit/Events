import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
         email:{
            type:String,
            required:true,
            unique:true
        },
        fullName:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
            minLength:6
        },
        registeredEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }]
},
{timestamps:true}
)

const User = new mongoose.model('User',userSchema)

export default User;