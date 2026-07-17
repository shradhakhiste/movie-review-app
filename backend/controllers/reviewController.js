import { Movie} from "../models/Movie.model.js";
import { Review } from "../models/Review.model.js";

export const reviewMovie = async (req,res)=>{
     try {
        const movieId = req.params.movieId;
    const {rating,comment} = req.body;

    const isMovieExsist = await Movie.findById(movieId);
    if(!isMovieExsist){
       return res.status(404).json({message:"Movie is not exsist"})
    }

    const reviewExsist = await Review.findOne({movie:movieId,user:req.user._id})
    if(reviewExsist){
       return res.status(400).json({message:"Your are already responded"})
    }

    const createReview = await Review.create({
        movie:movieId,
        user:req.user._id,
        rating,
        comment
    })
    res.status(201).json(createReview)

        
     } catch (error) {
        res.status(500).json({message:error.message})
     }
    


}

