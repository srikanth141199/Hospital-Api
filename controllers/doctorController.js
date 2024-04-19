import doctorModel from "../model/doctorSchema.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import session from "express-session";

export default class DoctorController {

  //method to register Doctor
  async registerDoctor(req, res) {
    //console.log("body : ", req.body);
    //console.log("params : ", req.params);
    //console.log("res", res);
    try {
      //console.log("came here");
      const doc = await doctorModel.findOne({ username: req.body.username });

      if (doc) {
        console.log("Doctor Already exists, Kindly Login");
        res.status(409).send("Doctor Already exists, Kindly Login");
        return;
      }

      const { username, password, name } = req.body;
      console.log("req.body : ", req.body);

      const newDoc = await doctorModel.create(req.body);

      return res.status(201).send(newDoc);
    } catch (error) {
      console.log("Error Registering the Doctor!!", error);
      res.status(500).json({ message: "Error while Registering!!" });
    }
  }

  //Login for doctor and creation of JWT token on Login
  async doctorSession(req, res) {
    try {
      const doc = await doctorModel.findOne({ username: req.body.username });

      if (!doc || doc.password != req.body.password) {
        return res
          .status(500)
          .json({ message: "Invalid Credentials, Kindly try again." });
      }

      return res.status(201).json({
        message: "Login successful",
        data: {
          token: jwt.sign(doc.toJSON(), "B1EC4D3F3C986", { expiresIn: "1h" }),//generation of jwt token based on doctor details, secretKey
        },
      });
    } catch (error) {
      console.log("Error while Login!!", error);
      res.status(500).json({ message: "Error while Login!!" });
    }
  }
}
