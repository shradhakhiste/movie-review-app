import mongoose,{Schema} from "mongoose";

const movieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
         type:String,
        required:true
    },
    genre:{
         type:String,
        required:true
    },
    releaseYear:{
        type:Number,
        required:true
    },
    posterUrl:{
        type:String,
        
    },
    addedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
   
},{timestamps:true})

export const Movie = mongoose.model("Movie",movieSchema)