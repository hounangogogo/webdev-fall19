const express = require('express')
const app = express()
var session = require('express-session')
var bodyParser = require('body-parser')


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webdev-fall-2019')




const userService = require('./services/user.service.server'); //(app);
userService(app);

const sectionService = require('./services/section.service.server');
sectionService(app);
//require('./services/user.service.server')(app);






app.listen(3000)
