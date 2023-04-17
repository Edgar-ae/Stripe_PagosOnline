//initlalizations
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

// Creare Middleware
app.set('views', path.join(__dirname, 'views'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Settings
 app.engine('.hbs', exphbs({
     defaultLayout: 'main',
     layoutsDir: path.join(app.get('views'), 'layouts'),
     partialasDir: path.join(app.get('views'), 'partials'),
     extname: '.hbs'
 }));
app.set('view engine', 'hbs');

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index.js'));

//start server
app.listen(3000, () => {
    console.log('server on port', 3000);
});