import express from 'express';
const router= express.Router();

import {Signup,Login,getUserDetails} from "../controllers/userController.js";
import Middleware from "../middlewares/authMiddleware.js"

router.post("/signup",Signup);
router.post("/login",Login);
router.get("/user",Middleware,getUserDetails);
export default router;