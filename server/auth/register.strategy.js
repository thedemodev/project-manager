const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

// register strategy
exports.RegisterStrategy = new LocalStrategy({
    passReqToCallback: true
}, (req, username, password, done) => {
    // take the email off of the body of the req
    const { email } = req.body;
    // get an instance of the db
    const db = req.app.get('db');
    // create a hashed password to store in the db
    const hashedPass = bcrypt.hashSync(password, 15);
    // validate if there is a user already in the db
    db.users.find({ username })
        .then(userResults => {
            // check if there are any results
            if(userResults.length > 0){
                return done(null, false, {message: 'Username is already taken, please try again!'});
            };
            // if the user isn't found, create a new user
            return db.users.insert({
                username,
                password: hashedPass,
                email
            });
        })
        .then(user => {
            // remove the password from the user before sending it
            delete user.password;
            // send user back
            done(null, user);
        })
        .catch(error => {
            if (error) throw error;
            done(null, false, {message: 'Internal Server Error'})
        });
});