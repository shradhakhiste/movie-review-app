import { Router } from "express";
import { createMovie } from "../controllers/movieController.js";
import { getAllMovies } from "../controllers/movieController.js";
import protect from "../middlerware/authMiddleware.js";

const movieRouter=Router();

movieRouter.post('/',protect,createMovie);
movieRouter.get('/',getAllMovies)



export default movieRouter;
