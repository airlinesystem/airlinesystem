var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//////*****/////
mongoose.connect(process.env.databaseurl ||'mongodb://root:nothing@ds135049.mlab.com:35049/ahmed_6569_db');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('./client'));

require('./config/routes.js')(app, express);
var PORT = process.env.PORT || 8080;
app.listen(PORT ,function(){
	console.log('server is listning '+ PORT)	
});

module.exports = app;
