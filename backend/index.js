import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./DB/Connect.js"

const PORT=process.env.PORT || 5000;
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

connectDB().then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
})
