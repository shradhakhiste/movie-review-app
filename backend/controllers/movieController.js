

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
            res.status(404).json({message:"Movie is not found"})
        }else{
            res.status(200).json(movie)
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}