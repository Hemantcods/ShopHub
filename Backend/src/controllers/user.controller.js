import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";



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

// logout user
const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, {
        $set: {
            refreshToken: undefined
        }
    }, {
        new: true
    }
    )
    const options = {
        httpOnly: true,
        secure: true
    }
    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(200, {}, "user logged out")
        )
})

// refresh access token
const refreshAccessToken = asyncHandler(async (req, res) => {
    console.log(req.cookies)
    const inc_refresh_token = await req.cookies.refreshToken || req.body.refreshToken
    if (!inc_refresh_token) {
        throw new ApiError(401, "unauthorised request")
    }
    const decodedToken = jwt.verify(
        inc_refresh_token,
        process.env.REFRESH_TOKEN_SECRET
    )
    const user = await User.findById(decodedToken?._id)
    if (!user) {
        throw new ApiError(402, "unauthorised user request")
    }
    if (inc_refresh_token !== user?.refreshToken) {
        throw new ApiError(401, "refresh token expired")
    }
    const options = {
        httpOnly: true,
        secure: true
    }
    const { access_token, refresh_token } = await generateAccessAndRefreshToken(user._id)
    return res
        .status(200)
        .cookie("access_token", access_token, options)
        .cookie("refresh_token", refresh_token, options)
        .json(
            new ApiResponse(200, { access_token, refresh_token }, "sucess")
        )
})

// change password
const changePassword = asyncHandler(async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id)
    if (!(user.isPasswordCorrect(currentPassword))) {
        throw new ApiError(401, "password missmatch")
    }
    user.password = newPassword
    await user.save({ ValidateBeforeSave: false })

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "password updated sucessfully"))
});

// get current user
const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, req.user, "user fetched sucessfully"))
})

// update user details
const updateUserDetails = asyncHandler(async (req, res) => {
    const { firstName,lastName,phone,address,city,state,country,zip, email } = req.body
    if (!(fullName || email)) {
        throw new ApiError(401, "fullname or password reuuired")
    }
    const newuser = User.findByIdAndUpdate(req.user._id, {
        $set: {
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            state,
            country,
            zip
        }
    }, { new: true })
        .select("-passwoed")
    return res
        .status(200)
        .json(new ApiResponse(200, newuser, "updated sucessfully"))
})

// all user controllers
export {
    registerUser,
    LoginUser,
    logoutUser,
    refreshAccessToken,
    changePassword,
    getCurrentUser,
    updateUserDetails
}