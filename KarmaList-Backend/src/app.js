import express from 'express';
const app = express();

//importing inbuilt modules 
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';


//configure dotenv
dotenv.config();

app.get('/',(req,res)=>{
res.send("hello bhai");
})

export default app 