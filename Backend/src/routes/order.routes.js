import { Router } from "express"
import { orderItem,getOrders } from "../controllers/order.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router()

// secured routes
router.route("/order").post(
    verifyJWT,
    orderItem
)
router.route("/orders").post(
    verifyJWT,
    getOrders
)



export default router;
