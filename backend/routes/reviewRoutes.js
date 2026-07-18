import { Router } from "express";
import { reviewMovie,getMovieReview, updateReview ,deleteReview} from "../controllers/reviewController.js";
import protect from "../middlerware/authMiddleware.js";

const reviewRouter = Router();

reviewRouter.post('/:movieId/reviews',protect,reviewMovie)
reviewRouter.get('/:movieId/reviews',getMovieReview)
reviewRouter.put('/:id',protect,updateReview)
reviewRouter.delete('/:id',protect,deleteReview)

export default reviewRouter;