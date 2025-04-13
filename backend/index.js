
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    return res.status(200).json({
        message: 'I am coming from the backend',
        success: true
    })
});

// middlewares 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'https://localhost:5173',
    credentials: true
} 
app.use(cors(corsOptions));

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at port: ${PORT}`);
});