import { Router } from "express";
import { reviewMovie } from "../controllers/reviewController.js";
import protect from "../middlerware/authMiddleware.js";

const reviewRouter = Router();

reviewRouter.post('/:movieId/reviews',protect,reviewMovie)


export default reviewRouter;