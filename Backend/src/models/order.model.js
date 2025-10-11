import mongoose,{Schema} from "mongoose";

const orderSchema=new Schema({
    customer_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
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