import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";




// generate token
const generateAccessAndRefreshToken = async (userID) => {
    try {
        const user = await User.findOne({ _id: userID })
        console.log(user)
        const access_token = await user.generateAccessToken()
        const refresh_token = await user.generateRefreshToken()
        user.refreshToken = refresh_token
        await user.save({ ValidateBeforeSave: false })
        return { access_token, refresh_token }
    } catch (error) {

        throw new ApiError(500, "something went wrong while genrating acess and refresh token", error)
    }
}


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

// login User
const LoginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    // check validation
    if([email,password].some((item)=>item?.trim()=="")){
        throw new ApiError(400,"All fields are required")
    }
    // check if user exists
    const user=await User.findOne(({email}))
    .select("-password");
    if(!user){
        throw new ApiError(400,"User not found")
    }
    // check if password is correct
    const isPasswordCorrect=await user.isPasswordCorrect(password);
    if(!isPasswordCorrect){
        throw new ApiError(400,"Invalid credentials")
    }   
    // generate access and refresh token
    const {access_token,refresh_token}=await generateAccessAndRefreshToken(user._id);
    const options = {
        httpOnly: true,
        secure: true
    }
    return res.status(200)
    .cookie("refreshToken",refresh_token,options)
    .cookie("accessToken",access_token,options)
    .json(
        new ApiResponse(200,{user,access_token,refresh_token},"User logged in successfully")
    );

})


// all user controllers
export {
    registerUser
}