import mongoose, { mongo } from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    createdByDoc : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Doctor"
    },

    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Patient"
    },

    date : {
        type : Date,
        required : true
    },

    reportStatus : {
        type : String,
        required : true,
        enum :['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    }
  },
  {
    timestamps: true,
  }
);

const reportModel = mongoose.model("Report", reportSchema);
export default reportModel;
