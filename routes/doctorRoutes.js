import express from "express";
//import { doctorSession, registerDoctor } from "../controllers/doctorController.js";
const doctorRouter = express.Router();
import DoctorController from "../controllers/doctorController.js";

const doctorController  = new DoctorController();//creating instance of the Doctor Controller to access the methods

doctorRouter.post("/register", (req, res, next) => { doctorController.registerDoctor(req, res, next)});//to register Doctor
doctorRouter.post("/login", (req, res, next) => {doctorController.doctorSession(req, res, next)});//for Doctor Login

export default doctorRouter;