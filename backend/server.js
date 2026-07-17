import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.config.js';
import authRouter from './routes/authRoutes.js';
import movieRouter from './routes/movieRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/movies',movieRouter)
app.use('/api/movies',reviewRouter)
connectDB()

app.get('/',(req,res)=>{
    res.send("running")
})

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`)
})