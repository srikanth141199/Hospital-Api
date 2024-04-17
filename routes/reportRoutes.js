import express from "express";
import ReportController from "../controllers/reportController.js";

const router = express.Router();

const reportController = new ReportController();

router.get("/:status", (req, res, next) => {reportController.fetchReports(req, res, next)});

export default router;