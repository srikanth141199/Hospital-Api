import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

import doctorModel from "../model/doctorSchema.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};


passport.use(new JWTStrategy(opts, async (jwtPayload, done) => {
  try {
    //console.log("jwt : ", jwtPayload);
    const user = await doctorModel.findById(jwtPayload._id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    console.log("passport error!!");
    return done(error, false);
  }
}));

export default passport;