import { Router } from "express";
import { registerUser, LoginUser, logoutUser, changePassword, getCurrentUser, updateUserDetails, refreshAccessToken} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.route("/register").post(
    registerUser
);
router.route("/login").post(
    LoginUser
);
// Protected route
router.route("/logout").post(
    verifyJWT,
    logoutUser
)
router.route("/change-password").post(
    verifyJWT,
    changePassword
)
router.route("/current-user").get(
    verifyJWT,
    getCurrentUser
)
router.route("/update-user").post(
    verifyJWT,
    updateUserDetails
)
router.route("/refresh-access-token").post(
    verifyJWT,
    refreshAccessToken
)
export default router;