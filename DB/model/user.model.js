import {Schema,model} from 'mongoose';

const userSchema = new Schema({

    userName:{

        type:String,
        required:true,

    },
    email:{

        type:String,
        unique:true,
        required:true,

    },
    age:Number,
    gender:{
        type:String,
        default:'male',
        enum:['male','female']
    },
    confirmEmail :{
        type:Boolean,
        default:false,
    },
    profilePic: String,
    coverPic: Array,
    phone:{
        type:String,
    }
},{timestamps:true}) 

export const userModel = model('user',userSchema);