const express = require('express');
const router = require('./routers/router');
const path = require("path");   
const morgan = require('morgan');
const app = express();
const port = 3000;

// const ejsLayouts = require('express-ejs-layouts');

app.use(morgan('dev'));

app.set("view engine", "ejs");
app.set("views", "./views");
// app.use(ejsLayouts);

// Config folder layouts
app.set('layout', 'layouts/layouts');

app.use(express.static(path.join(__dirname, 'public')))

//build in middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}!`);
})
