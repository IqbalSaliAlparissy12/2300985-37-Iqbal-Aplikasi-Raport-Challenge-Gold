const passport = require("passport");

module.exports = {
		indexLogin: (req, res) => {
        res.render('login', { tblUser: req.tblUser })
		},
		login: passport.authenticate("local", {
        successRedirect: "/home",
        failureRedirect: "/login",
        failureFlash: true
    }),
		logout: (req, res, next) => {
	    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/login');
	    })
		}
}