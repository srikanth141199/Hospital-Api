import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();// to load environment variables from a .env file into the process.env object
const url = process.env.DB_URL;

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser : true,
      useUnifiedTopology: true
  });
    console.log("Successfully connect to DB using Mongoose");
  } catch (error) {
    console.log("Something went wrong while connecting to DB!!");
    console.log(error);
  }
};
