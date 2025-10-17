import { Order } from "../models/order.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";




const orderItem=asyncHandler(async(req,res)=>{
    // get data
    const {product_id,quantity,price}=req.body;
    if ( !product_id || !quantity || !price){
        throw new ApiError(400,"All fields are required");
    }
    // check if product exists
    console.log("checking product existance");
    
    const product=await Product.findById(product_id);
    if (!product){
        throw new ApiError(404,"Product not found");
    }
    // create order
    const order=new Order({
        product_id:product_id,
        customer_id:req.user._id,
        quantity,
        price
    })
    // save order
    await order.save();
    res
    .status(201)
    .json(
        new ApiResponse(
            201,
            order,
            "order created sucessfully"
        )
    )

})

const getOrders=asyncHandler(async(req,res)=>{
    const {user}=req
    // the populate will modify product_id
    console.log("finding user");
    
    const orders=await Order.find({customer_id:user._id}).populate("product_id");
    console.log(orders)
    res
    .status(201)
    .json(
        new ApiResponse(
            201,
            orders,
            "orders fetched sucessfully"
        )
    )
})




export {
    orderItem,
    getOrders

}