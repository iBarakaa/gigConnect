import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { getSeeker, updateSeeker } from "../controllers/seekerController.js";

const router = express.Router();

// GET seeker user
router.post("/get-seeker", userAuth, getSeeker);

// UPDATE seeker || PUT
router.put("/update-seeker", userAuth, updateSeeker);

export default router;