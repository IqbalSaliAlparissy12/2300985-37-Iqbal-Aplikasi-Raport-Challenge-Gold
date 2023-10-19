const express = require('express');
const router = require('./routers/router');
const path = require("path");   
const morgan = require('morgan');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./libs/passport');

// const ejsLayouts = require('express-ejs-layouts');

// app.use(ejsLayouts);

// Config folder layouts
// app.set('layout', 'layouts/layouts');


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static("public"))



//build in middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// proses inisasi middleware 
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// end proses inisiasi middleware.


app.use(morgan('dev'));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(router);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}!`);
})
