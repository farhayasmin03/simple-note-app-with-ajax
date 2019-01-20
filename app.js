var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var routes = require('./routes/router');

app.use('/', routes);

app.use(express.static(__dirname + '/public'));
var mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect('mongodb://localhost/noteapp');

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

module.exports = app;