import mongoose,{ Schema } from "mongoose";


const productSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String
    },
    imageUrl:{
        type:String
    }


},
{timestamps:true}
)



export const Product=mongoose.model("Product",productSchema);