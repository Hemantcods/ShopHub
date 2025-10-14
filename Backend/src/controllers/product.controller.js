import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
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
    const product=await Product.findById(id);
    if (!product){
        throw new ApiError(404,"Product not found");
    }
    res.status(200).json({product});
}

// get all products
const getAllProducts=async(req,res)=>{
    const products=await Product.find();
    res.status(200).json({products});
}



export {
    createProduct,
    getProduct,
    getAllProducts
};