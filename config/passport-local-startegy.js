import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import doctorModel from "../model/doctorSchema";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};


passport.use(new JWTStrategy(opts, async (payload, done) => {
  try {
    const user = await doctorModel.findById(payload._id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

export default passport;