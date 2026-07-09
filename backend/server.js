import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.config.js';
import router from './routes/authRoutes.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/api/auth',router)
connectDB()

app.get('/',(req,res)=>{
    res.send("running")
})

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`)
})