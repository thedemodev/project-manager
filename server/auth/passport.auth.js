const passport = require('passport');

// Strategies
const login = require('./login.strategy');
const register = require('./register.strategy');

// Passport Config
passport.use('login', login.LoginStrategy);
passport.use('register', register.RegisterStrategy);

// Serialize and Deserialize the user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});