import mongoose,{Schema} from "mongoose";


const orderItemSchema=new Schema({
    order_id:{
        type:Schema.Types.ObjectId,
        ref:"Order",
        required:true
    
    },
    product_id:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    
})


export const OrderItem=mongoose.model("OrderItem",orderItemSchema);