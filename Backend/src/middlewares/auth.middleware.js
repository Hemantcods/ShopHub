import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import jwt from 'jsonwebtoken'
import { User } from "../models/user.model.js";

// this middleware will verify the JWT token and attach the user to the request object
export const verifyJWT = asyncHandler(async (req,_res,next) => {
    try {
        const token = await req.cookies?.accessToken
        if (!token) {
            throw new ApiError(401, "Unauthorised request")
        }
        const decodedToken = jwt.verify(token, process.env.ACESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select('-password -refreshToken')

        if (!user) {
            throw new ApiError(401, "Invalid acess token")
        }
        req.user = user
        
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid acess token")
    }
})