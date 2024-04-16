import express from "express";
import doctorRouter from  "./doctorRoutes.js";
import patientRouter  from "./patientRoutes.js";
import reportRouter from "./reportRoutes.js";

const router = express.Router();

router.use("/doctor", doctorRouter);
router.use("/patient", patientRouter);
router.use("/reports", reportRouter);

export default router;