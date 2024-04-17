import express from "express";
//import { doctorSession, registerDoctor } from "../controllers/doctorController.js";
const doctorRouter = express.Router();
import DoctorController from "../controllers/doctorController.js";

const doctorController  = new DoctorController();

doctorRouter.post("/register", (req, res, next) => { doctorController.registerDoctor(req, res, next)});
doctorRouter.post("/login", (req, res, next) => {doctorController.doctorSession(req, res, next)});

export default doctorRouter;