import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';


import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import postRoute from "./routes/post.route.js"
import connectDB from '../db/connectDB.js';


dotenv.config();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET_KEY
})
           
const app = express();
const PORT = process.env.PORT;
 
connectDB(); 
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth' , authRoute)
app.use('/api/users' , userRoute)
app.use("/api/posts", postRoute)

app.get('/', (req,res) => {
    res.json('Hello X-clone')
})

app.listen(PORT, () => {
    console.log(`server is running successfully on ${PORT}`)
    
})