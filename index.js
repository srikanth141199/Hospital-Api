import "./env.js"
import express from "express";
import passport from "passport";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import doctorRouter from "./routes/doctorRoutes.js";
import { connectUsingMongoose } from "./config/mongoose.js";

const app = express();
const port = process.env.port || 3200;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Initialize Passport.js
app.use(passport.initialize());
app.use(bodyParser.json())

// app.get('/', (req, res)=>{
//     res.send("Welcome to Hospital APIs");
// });

app.use("/", router)

app.listen(port, (err)=>{

    if(err){
        console.log("There is a issue in connect to Server!!");
        return;
    }
    connectUsingMongoose();
    console.log("Server is running on Port : ", port);

})