import { Router } from "express";
import { signupUser } from "../controllers/authController.js";
const router=Router()

router.post('/signup',(signupUser))

export default router;
