import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import doctorModel from '../model/doctorSchema';

const local = new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
  try {
    const user = await doctorModel.findOne({ username });
    if (!user || !user.isPasswordCorrect(password)) {
      console.log('Invalid Username/Password');
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    console.log(`Error in finding user: ${error}`);
    return done(error);
  }
});

passport.use('local', local);

//serialize user
//method is used to determine which data of the user object should be stored in the session.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//deserialize user
//method is used to retrieve the user object from the session data
passport.deserializeUser(async (id, done) => {
  try {
    const user = await doctorModel.findById(id);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

// check if user is authenticated
passport.checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/');
};

// set authenticated user for views
passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};

export default local;
