import { Router } from "express";
import { createMovie } from "../controllers/movieController.js";
import protect from "../middlerware/authMiddleware.js";

const movieRouter=Router();

movieRouter.post('/',protect,createMovie);


export default movieRouter;
