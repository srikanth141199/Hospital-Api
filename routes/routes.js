import express from "express";
import passport from "passport";

import doctorRouter from  "./doctorRoutes.js";
//import DoctorController from "../controllers/doctorController.js";
import patientRouter  from "./patientRoutes.js";
import reportRouter from "./reportRoutes.js";

const router = express.Router();

//const doctorController  = new DoctorController();

//router.post("/doctors/register", (req, res, next) => {doctorController.registerDoctor(req, res, next)});
router.use("/doctors", doctorRouter);
router.use("/patients", passport.authenticate('jwt', {session : false}), patientRouter);
router.use("/reports", passport.authenticate('jwt', {session : false}), reportRouter);

export default router;