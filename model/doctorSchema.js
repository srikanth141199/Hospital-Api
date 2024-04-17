import mongoose from "mongoose";
import bcrypt from "bcrypt";

const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value);
      },
      message:
        "Password should be between 8-12 characters and a special character",
    },
    required : true
  },

  name: {
    type: String,
    maxLength: [25, "Name can not be more than 25 characters"],
    required: true,
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


const doctorModel = mongoose.model("Doctor", doctorSchema);

export default doctorModel;
