import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        const success = await mongoose.connect(process.env.MONGODB_URI)
        if(success){
            console.log("successfully connected to db")
        }
    } catch (error) {
        console.log("couldn't connect to database",error)
    }
}