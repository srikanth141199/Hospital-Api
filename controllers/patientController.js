import patientModel from "../model/patientSchema.js";

export default class PatientController {

    async registerPatient(req, res)  {
        try {
            const patient = await patientModel.findOne({number : req.body.number});

            if(patient){
                console.log("Patient Already exists!!");
                return res.status(409).send("Patient Already exists!!");
            }

            const newPatient = await patientModel.create(req.body);
            return res.status(201).json({message : "Patient successfully registered", data : {newPatient}})
        } catch (error) {
            console.log("Error Registering the Patient!!", error);
            res.status(500).json({ message: "Error while Registering Patient!!" });
        }
    }

    async createPatientReport(req, res){

    }

    async fetchAllReports(req, res){

    }
}