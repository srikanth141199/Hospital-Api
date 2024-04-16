import express from "express";

const router = express.Router();

router.post("/register", registerDoctor);
router.post("/login", doctorSession);

export default router;