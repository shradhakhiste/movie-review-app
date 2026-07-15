

import { Movie } from "../models/Movie.model.js";


export const createMovie = async (req,res)=>{
    try {
        const {title,description,genre,releaseYear,posterUrl} = req.body;

      

        const movie = await Movie.create({
            title,
            description,
            genre,
            releaseYear,
            posterUrl,
            addedBy:req.user._id
        })
        res.status(201).json(movie)
      
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}

export const getAllMovies = async (req,res)=>{
    try {
         

        const findMovies = await Movie.find();
        res.status(200).json(findMovies)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getMovieById = async (req,res)=>{
    try {
        const movie=await Movie.findById(req.params.id)
        if(!movie){
            return res.status(404).json({message:"Movie is not found"})
        }else{
            res.status(200).json(movie)
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const updateMovie = async (req,res)=>{
    try {
        
    const movie= await Movie.findById(req.params.id);

    if(!movie){
        return res.status(404).json({message:"moive is not found"})

    }

    if(movie.addedBy.toString() !== req.user._id.toString()){
         return res.status(403).json({message:"You are not authorized user"})
    }
       

        const updatedMovie= await Movie.findByIdAndUpdate(req.params.id,req.body,{returnDocument:'after'})
          res.status(200).json(updatedMovie)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" })
        }

        if (movie.addedBy.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "You are not authorized" })
        }

        await Movie.findByIdAndDelete(req.params.id)

        res.status(200).json({ message: "Movie deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}