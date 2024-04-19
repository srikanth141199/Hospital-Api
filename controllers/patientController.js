import doctorModel from "../model/doctorSchema.js";
import patientModel from "../model/patientSchema.js";
import reportModel from "../model/reportSchema.js";

export default class PatientController {

    //to register Patient
    async registerPatient(req, res)  {
        try {
            const patient = await patientModel.findOne({number : req.body.number});
            console.log("doc Details", req.user);//Patient will be registered by Doctor

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
        try {
            const patientId = req.params.id;
            const DocId = req.user._id; //fetching Doc details from JWT auth to update in report

            //creation of Report
            const newReport = await reportModel.create({
                createdByDoc : DocId,
                patient : patientId,
                date : new Date(),
                reportStatus : req.body.status
            })

            //updating report details in Doctor and Patient models
            const doc = await doctorModel.findById(DocId);
            const patient = await patientModel.findById(patientId)

            doc.reports.push(newReport);
            patient.reports.push(newReport);

            await doc.save(); // Save the updated doctor document
            await patient.save(); // Save the updated patient document

            return res.status(201).json({message : "Report created Successfully", data : newReport})
        } catch (error) {
            console.log("Error creating Report for Patient!!", error);
            res.status(500).json({ message: "Error creating Report for Patient!!" });
        }
    }

    //fetch all records based on Patient id from url
    async fetchAllReports(req, res){
        const patientId = req.params.id;
        //const patient = await patientModel.findById(patientId);

        const patientReports = await reportModel.find({patient : patientId})

        //sorting all the records of the patient based on creation date in ascending order.
        patientReports.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateA - dateB;
          });

        res.status(200).json(patientReports)
    }
}