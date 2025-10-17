import mongoose,{Schema} from "mongoose";

const orderSchema=new Schema({
    product_id:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    customer_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    order_date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:["pending","processing","shipped","delivered","cancelled"],
        default:"pending"
    }
})



export const Order=mongoose.model("Order",orderSchema);