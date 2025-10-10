import express from "express";
import cors from "cors";
const app = express();

// cors
app.use(cors({
    origin:process.env.FRONTEND_URL
}));



// routes
app.get("/api",(req,res)=>{
    console.log("API is running...");
    res.send("API is running...");
})



export {app};
