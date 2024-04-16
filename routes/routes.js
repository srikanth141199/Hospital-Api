import express from "express";
import passport from "passport";

import doctorRouter from  "./doctorRoutes.js";
import patientRouter  from "./patientRoutes.js";
import reportRouter from "./reportRoutes.js";

const router = express.Router();

router.use("/doctor", doctorRouter);
router.use("/patient", passport.checkAuthentication, patientRouter);
router.use("/reports", passport.checkAuthentication, reportRouter);

export default router;