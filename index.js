import express from "express";
import passport from "passport";

const app = express();
const port = process.env.port || 3200;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Initialize Passport.js
app.use(passport.initialize());

app.listen(port, (err)=>{

    if(err){
        console.log("There is a issue in connect to Server!!");
        return;
    }
    //need to connect to db call to be added.
    console.log("Server is running on Port : ", port);

})