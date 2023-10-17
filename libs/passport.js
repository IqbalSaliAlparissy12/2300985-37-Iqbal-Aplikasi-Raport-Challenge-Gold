const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// call model
const { tblUser } = require('../models');

const authenticate = (strEmail, strPassword, done) => {
    tblUser.findOne({ where: { strEmail: strEmail } }).then(userData => {
        if (!userData) {
            return done(null, false, { message: 'User tidak terdaftar!' });
        }

        bcrypt.compare(strPassword, userData.strPassword).then(isMatch => {
            if (!isMatch) {
                return done(null, false, { message: 'Email dan password tidak sesuai!' });
            }

            return done(null, userData);
        });
    });
};

passport.use(new LocalStrategy({
    usernameField: 'strEmail',
    passwordField: 'strPassword'
}, authenticate));

passport.serializeUser((tblUser, done) => {
    done(null, tblUser.id);
});

passport.deserializeUser((id, done) => {
    tblUser.findByPk(id).then(tblUser => {
        done(null, tblUser);
    });
});

module.exports = passport;