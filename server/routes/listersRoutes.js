import express, { Router } from "express";
import { rateLimit } from "express-rate-limit";
import {
  getListers,
  getListerById,
  getListerJobListing,
  getListerProfile,
  register,
  signIn,
  updateListerProfile,
} from "../controllers/listerController.js";
import userAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

//ip rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// REGISTER
router.post("/register", limiter, register);

// LOGIN
router.post("/login", limiter, signIn);

// GET DATA
router.post("/get-lister-profile", userAuth, getListerProfile);
router.post("/get-lister-joblisting", userAuth, getListerJobListing);
router.get("/", getListers);
router.get("/get-lister/:id", getListerById);

// UPDATE DATA
router.put("/update-lister", userAuth, updateListerProfile);

export default router;