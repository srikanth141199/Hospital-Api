import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [25, "Name can not be more than 25 characters"],
    required: true,
  },

  number: {
    type: Number,
    maxLength: [10, "Number can not be more than 10 characters"],
    required: true,
    unique: true,
  },

  reports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    },
  ],
},{
    timestamps : true
});

const patientModel = mongoose.model("Patient", patientSchema);
export default patientModel;
