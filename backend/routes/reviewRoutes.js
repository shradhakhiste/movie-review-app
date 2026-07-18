import { Router } from "express";
import { reviewMovie,getMovieReview } from "../controllers/reviewController.js";
import protect from "../middlerware/authMiddleware.js";

const reviewRouter = Router();

reviewRouter.post('/:movieId/reviews',protect,reviewMovie)
reviewRouter.get('/:movieId/reviews',getMovieReview)

export default reviewRouter;