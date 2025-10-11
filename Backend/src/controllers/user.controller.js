import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";




// register user
const registerUser=asyncHandler(async(req,res)=>{
    // get user data from req body
    // console.log(req.body);
    const {email,password,firstName,lastName,phone}=req.body;

    // check validation
    if([email,password,firstName,lastName,phone].some((item)=>item?.trim()=="")){
        throw new ApiError(400,"All fields are required")
    }

    // check if user already exists
    await User.findOne(({email}))
    .then((user)=>{
        if(user){
            throw new ApiError(400,"User already exists")
        }
    })

    // create user
    const user=await User.create({
        email:email.toLowerCase(),
        password,
        firstname:firstName,
        lastname:lastName,
        phone
    })

    const CreatedUser=await User.findById(user._id).select("-password -refreshToken")

    if(!CreatedUser){
        throw new ApiError(400,"User not created")
    }

    return res.status(201).json(
        new ApiResponse(201,CreatedUser,"User created successfully")
    );

})



// all user controllers
export {
    registerUser
}