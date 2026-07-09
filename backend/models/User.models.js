import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

//pre-save hook 

userSchema.pre('save', async function () {
    if(!this.isModified('password')){
        return 
    }
    this.password=await bcrypt.hash(this.password,10)
    
})

//hashing 

userSchema.methods.matchPassword= async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
    
}

export const User = mongoose.model("User", userSchema);
