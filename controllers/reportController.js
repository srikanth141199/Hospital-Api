import reportModel from "../model/reportSchema.js";

export default class ReportController {

    //fetch all the reports based on status
    async fetchReports(req, res){
        const status = req.params.status;
        //console.log("status : ", status);
        const reports = await reportModel.find({reportStatus : status })

        res.status(200).json(reports);
    }
}