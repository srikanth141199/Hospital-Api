import express from "express";

const router = express.Router();

router.post("/register", registerPatient);
router.post("/:id/create_report", createPatientReport);

router.get("/:id/all_reports", fetchAllReports);

export default router;