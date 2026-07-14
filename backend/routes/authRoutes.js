import { Router } from "express";
import { signupUser,loginUser,getProfile } from "../controllers/authController.js";
import protect from "../middlerware/authMiddleware.js";

const authRouter=Router()

authRouter.post('/signup',(signupUser))
authRouter.post('/login',loginUser)
authRouter.get('/profile',protect,getProfile)

export default authRouter;
