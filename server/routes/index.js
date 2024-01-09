import express from "express";

import authRoute from "./authRoutes.js";
import seekerRoute from "./seekerRoutes.js";
import listerRoute from "./listersRoutes.js";
import jobRoute from "./jobsRoutes.js";

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}auth`, authRoute); //api-v1/auth/
router.use(`${path}seekers`, seekerRoute);
router.use(`${path}listers`, listerRoute);
router.use(`${path}jobs`, jobRoute);

export default router;