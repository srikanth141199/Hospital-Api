import express from "express";
import PatientController from "../controllers/patientController.js";

const router = express.Router();

const patientController = new PatientController();

router.post("/register", (req, res, next) => {patientController.registerPatient(req, res, next)});//registration of patient
router.post("/:id/create_report", (req, res, next) => { patientController.createPatientReport(req, res, next)});//create Report on Patient

router.get("/:id/all_reports", (req, res, next) => {patientController.fetchAllReports(req, res, next)});//fetch Reports based on patient

export default router;