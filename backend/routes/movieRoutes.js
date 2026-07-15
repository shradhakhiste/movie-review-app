import { Router } from "express";
import { createMovie,getAllMovies,getMovieById,updateMovie } from "../controllers/movieController.js";

import protect from "../middlerware/authMiddleware.js";

const movieRouter=Router();

movieRouter.post('/',protect,createMovie);
movieRouter.get('/',getAllMovies);
movieRouter.get('/:id',getMovieById);
movieRouter.put('/:id',protect,updateMovie)



export default movieRouter;
