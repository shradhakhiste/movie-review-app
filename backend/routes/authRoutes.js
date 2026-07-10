import { Router } from "express";
import { signupUser,loginUser,getProfile } from "../controllers/authController.js";
import protect from "../middlerware/authMiddleware.js";

const router=Router()

router.post('/signup',(signupUser))
router.post('/login',loginUser)
router.get('/profile',protect,getProfile)

export default router;
