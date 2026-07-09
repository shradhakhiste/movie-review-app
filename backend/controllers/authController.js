import { User } from "../models/User.models.js";

export const signupUser= async (req,res)=> {
    try {
        const {name,email,password} = req.body

        const userExists= await User.findOne({email}) 
        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }

        const user =  await User.create({name,email,password})
        return res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })


    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user= await User.findOne({email})
        if(!user){
            return res.status(401).json({message:"Invalid credentials"})
        }
        const isPasswordValid = await user.matchPassword(password)
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid credentials"})
        }
        
            return res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email
            })
        

    } catch (error) {
        return res.status(500).json({message:"something went wrong"})
    }
}

