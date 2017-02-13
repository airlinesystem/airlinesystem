var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//////*****/////
mongoose.connect('mongodb://localhost/Users');


  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

app.use(express.static("./client"));
//require('./config/routes.js')(app, express);
app.listen(8000,function(){

console.log('server is listning 8000')	
});

module.exports = app;
