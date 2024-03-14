import mongoose from "mongoose";



const connectDB = async()=>{

    return await mongoose.connect(process.env.DBURLI)
    .then(res=>{
        console.log("connectDB");
    }).catch(err=>{

        console.log("fail connect DB",err);
    })
}


export default connectDB