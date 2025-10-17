import express from "express";
import cors from "cors";
import userRoute from "./routes/user.routes.js";
import productRoute from "./routes/product.routes.js";
import orderRoute from "./routes/order.routes.js";
import cookieParser from "cookie-parser";
const app = express();

// cors
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/orders",orderRoute)
// test route
// app.get("/api/test",(req,res)=>{
//     res.send("API is working")
// })


export {app};
