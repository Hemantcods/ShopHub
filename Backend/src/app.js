import express from "express";
import cors from "cors";
import userRoute from "./routes/user.routes.js";
const app = express();

// cors
app.use(cors({
    origin:process.env.FRONTEND_URL
}));



// routes
app.get("/api/user",userRoute)


export {app};
