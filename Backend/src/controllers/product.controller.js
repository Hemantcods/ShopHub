import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";



const createProduct=async(req,res)=>{
    // get the product details from req.body
    const {name,description,price,quantity,category,discount,rating,reviews,badge}=req.body;

    // check validation
    if ([name,description,price,quantity,category,discount,rating,reviews,badge].some((field)=>field?.trim()=="")){
        return res.status(400).json({message:"All fields are required"});
    }

    // get the image file from req.file
    const imageFile=req.file;
    if (!imageFile){
       throw new ApiError(400,"Image file is required");
    }
    const imagePath=imageFile.path; // local path of the image file
    // console.log("Image file path:",imagePath);

    // upload the image to cloudinary
    const uploadResponse=await uploadOnCloudinary(imagePath);
    if (!uploadResponse){
        throw new ApiError(500,"Failed to upload image to cloudinary");
    }
    const imageUrl=uploadResponse.url;
    // console.log("Image URL:",imageUrl);


    // create a new product
    const product=new Product({
        name,
        description,
        price,
        quantity,
        category,
        imageUrl,
        discount,
        rating,
        reviews,
        badge
    })

    // save the product to the database
    await product.save();
    res.status(201).json({message:"Product created successfully",product})
}

// get product
const getProduct=async(req,res)=>{
    const {id}=req.params;
    if(!id || id.trim()==""|| !mongoose.Types.ObjectId.isValid(id)){
        throw new ApiError(400,"Invalid product id");
    }
    try {
        const product=await Product.findById(id).select("-__v");
        
        if (!product){
            throw new ApiError(404,"Product not found");
        }
        res.status(200).json({product});
    } catch (error) {
        throw new ApiError(500,"Something went wrong");
    }
}

// get all products
const getAllProducts=async(req,res)=>{
    // get all products from the database sorted by createdAt in descending order
    const products=await Product.find().select("-__v").sort({createdAt:-1});
    res.status(200).json({products});
}

// getting product by category
const getProductByCategory=async(req,res)=>{
    const {category}=req.params;
    if (!category || category.trim()==""){
        throw new ApiError(400,"Invalid category");
    }
    try {
        const products=await Product.find({category}).select("-__v").sort({createdAt:-1});
        if (products.length===0){
            return res.status(404).json({message:"No products found in this category"});
        }
        res
        .status(200)
        .json(
            new ApiResponse(200,products,"products fetched sucessfully")
        )
    }catch (error){
    
        throw new ApiError(500,"Something went wrong");
    }
    }
export {
    createProduct,
    getProduct,
    getAllProducts,
    getProductByCategory    
};