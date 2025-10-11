import express from "express";
import cors from "cors";
import userRoute from "./routes/user.routes.js";
const app = express();

// cors
app.use(cors({
    origin:process.env.FRONTEND_URL
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/users",userRoute)
// test route
// app.get("/api/test",(req,res)=>{
//     res.send("API is working")
// })


export {app};
